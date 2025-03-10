const Bio = () => {
  const bio =
    "Тут буде текст про тебе.  Розкажи про свій досвід, навички та інтереси.";
  return (
    <div className="bg-light p-3 rounded shadow">
      <h2 className="h4 mb-3">Про мене</h2>
      <p className="text-muted">{bio}</p>
    </div>
  );
};
export default Bio;
