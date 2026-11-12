// Avaliação de rubrica didática da Câmara. Não recebe nem armazena texto pessoal.
export function evaluateCamaraDiscursive(prompt,assessments,linesUsed){
  if(!prompt||!Array.isArray(prompt.rubric)||!Array.isArray(assessments))throw new Error('Rubrica/avaliação inválida');
  if(!Number.isInteger(linesUsed)||linesUsed<0)throw new Error('Quantidade de linhas inválida');
  const grades=new Map();
  for(const x of assessments){
    if(!x||typeof x.id!=='string'||!Number.isFinite(x.points))throw new Error('Nota inválida');
    if(grades.has(x.id))throw new Error('Critério duplicado');
    grades.set(x.id,x);
  }
  if(grades.size!==prompt.rubric.length)throw new Error('Todos os critérios devem ser avaliados');
  const breakdown=prompt.rubric.map(r=>{
    const assessment=grades.get(r.id);
    if(!assessment||assessment.points<0||assessment.points>r.maxPoints)throw new Error('Critério ausente ou fora da faixa: '+r.id);
    if(typeof assessment.feedback!=='string'||!assessment.feedback.trim())throw new Error('Feedback obrigatório: '+r.id);
    return {id:r.id,points:assessment.points,maxPoints:r.maxPoints,feedback:assessment.feedback};
  });
  if([...grades.keys()].some(id=>!prompt.rubric.some(r=>r.id===id)))throw new Error('Critério estranho à rubrica');
  const total=breakdown.reduce((n,x)=>n+x.points,0);
  return {promptId:prompt.id,score:total,maxScore:prompt.totalPoints,linesUsed,maxLines:prompt.maxLines,exceedsLineLimit:linesUsed>prompt.maxLines,breakdown,calibration:'didatica-nao-oficial'};
}
