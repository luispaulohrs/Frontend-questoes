function Questoes() {
  const questoes = [
    "1. Qual o hormônio específico da gravidez?",
    "2. Quando o beta-HCG atinge o pico?",
    "3. O que é cloasma gravídico?"
  ];

  return (
    <div>
      <h2>Questões Médicas</h2>
      <ul>
        {questoes.map((q, idx) => (
          <li key={idx}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default Questoes;