// Soma avaliações de produções efetivas usando rubricas didáticas, sem guardar redação ou desempenho no repositório público.
// Notas, critérios e gêneros são autorais: não reproduzem espelho definitivo Cebraspe.
export function scoreCamaraDiscursive(proposal, grades, linesUsed){
  if(!proposal||!Array.isArray(proposal.rubric?.criteria)||!Array.isArray(grades))throw new Error('Rubrica ou notas inválidas');
  if(!Number.isInteger(linesUsed)||linesUsed<0)throw new Error('Número de linhas inválido');
  const received=new Map();
  for(const grade of grades){
    if(typeof grade?.criterionName!=='string'||!Number.isFinite(grade.points)||typeof grade.feedback!=='string'||!grade.feedback.trim())throw new Error('Cada nota requer nome, pontos e justificativa');
    if(received.has(grade.criterionName))throw new Error('Critério avaliado mais de uma vez');
    received.set(grade.criterionName,grade);
  }
  const criteria=proposal.rubric.criteria;
  if(received.size!==criteria.length)throw new Error('É necessário avaliar todos os critérios');
  const breakdown=criteria.map(criterion=>{
    const grade=received.get(criterion.name);
    if(!grade||grade.points<0||grade.points>criterion.maxPoints)throw new Error('Nota ausente ou fora do limite: '+criterion.name);
    return {criterion:criterion.name,points:grade.points,maxPoints:criterion.maxPoints,feedback:grade.feedback};
  });
  if(criteria.reduce((s,c)=>s+c.maxPoints,0)!==proposal.maxScore)throw new Error('Rubrica não fecha a pontuação');
  return {proposalId:proposal.id,score:breakdown.reduce((s,c)=>s+c.points,0),maxScore:proposal.maxScore,linesUsed,maxLines:proposal.maxLines,lineLimitExceeded:linesUsed>proposal.maxLines,breakdown,evaluationType:'didatica-nao-oficial',notice:'Excesso de linhas exige análise conforme o edital; nenhum desconto automático foi aplicado.'};
}
