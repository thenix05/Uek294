import { useParams, useNavigate } from "react-router";

export default function ChronicleEditRoute() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <main>
      <h2>Jetztige ID: {id}</h2>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Zurück
      </button>
    </main>
  );
}
