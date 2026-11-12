// Triagem reproduzível dos 389 itens históricos: estimativa textual, não dificuldade empírica.
// Jamais apresentar os níveis como homologação ou calibração Cebraspe.
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
export const METHOD='sinais-textuais-v1';
export function assessPilotDifficulty(item){
  if(typeof item?.statement!=="string" || typeof item?.explanation!=="string") throw new Error("Questão sem texto ou explicação");
  const normal=text=>text.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  const s=normal(item.statement),e=normal(item.explanation),m=normal(item.mechanism||"");
  const signals=[];let score=0;
  const mark=(condition,name,weight=1)=>{if(condition){score+=weight;signals.push(name)}};
  mark(s.length>190,"texto-com-condicoes-extensas");
  mark(s.length>300,"texto-muito-extenso");
  mark(/\b(se|caso|quando|desde que|contanto que|embora|ainda que|na hipotese|suponha)\b/.test(s),"condicional-hipotese");
  mark(/\b(somente|apenas|sempre|nunca|necessariamente|exclusivamente|qualquer|nenhum|nenhuma|por si so|em todos os casos)\b/.test(s),"quantificador-absoluto");
  mark(/\b(lei|artigo|art\.|inciso|paragrafo|decreto|prazo|quorum|maioria absoluta|competencia)\b/.test(s),"precisao-legal-ou-regimental");
  const nums=(s.match(/\b\d+(?:[.,]\d+)?\b/g)||[]).length;
  mark(nums>=2,"comparacao-numerica",2);
  mark(nums===1&&/\b(percentual|taxa|frequencia|dias|votos|quorum|metade|maioria)\b/.test(s),"valor-numerico-isolado");
  mark(/confund|inver|transfer|atribuir|trocar|substitu|infer|extrapol|negacao|causa|limit|condicion|excecao|equival/.test(m),"mecanismo-de-distincao");
  mark(e.length>220,"explicacao-com-etapas");
  const estimatedDifficulty=score>=5?"muito-dificil":score>=3?"dificil":score>=1?"media":"facil";
  return {estimatedDifficulty,difficultyAssessment:{method:"sinais-textuais-v1",status:"provisoria",score,signals}};
}

export function verifyPilotDifficulty(bank){
  const report={total:bank.pilotoDidatico.length,byDifficulty:{},provisional:0,editorial:0,mismatches:[]};
  for(const [index,item] of bank.pilotoDidatico.entries()){
    const expected=assessPilotDifficulty(item);
    const current=item.difficultyAssessment;
    if(!['facil','media','dificil','muito-dificil'].includes(item.estimatedDifficulty))report.mismatches.push(index+': nível inválido');
    if(current?.status==='provisoria'){
      report.provisional++;
      if(JSON.stringify(expected)!==JSON.stringify({estimatedDifficulty:item.estimatedDifficulty,difficultyAssessment:current}))report.mismatches.push(index+': estimativa não reproduzível');
    }else if(current?.status==='revisada' && current.reviewer && current.justification){
      report.editorial++;
    }else report.mismatches.push(index+': proveniência de dificuldade ausente');
    report.byDifficulty[item.estimatedDifficulty]=(report.byDifficulty[item.estimatedDifficulty]||0)+1;
  }
  return report;
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const bank=JSON.parse(fs.readFileSync(new URL('../data/questoes-camara.json',import.meta.url),'utf8'));
  const report=verifyPilotDifficulty(bank);
  console.log(JSON.stringify(report,null,2));
  if(report.mismatches.length)process.exitCode=1;
}
