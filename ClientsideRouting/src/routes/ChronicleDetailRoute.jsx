import { Link, useNavigate, useParams } from "react-router";
import Button from "@/components/Button.jsx";

export default function ChronicleDetailRoute() {
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = () => {
    setTimeout(() => navigate(-1), 5000);
  };

  return (
    <main>
      <h2>Detail der Chronik: {params.id}</h2>
      <Link to={"/"}>Chroniken Übersicht</Link>
      <div>
        <Button onClick={handleClick}>Zurück in 5 Sekunden</Button>
      </div>
      <Link to={`/chronicles/${params.id}/edit`}>Bearbeiten</Link>
    </main>
  );
}
