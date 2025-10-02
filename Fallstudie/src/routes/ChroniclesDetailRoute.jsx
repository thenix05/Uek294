import Chronicle from "@/Components/Chronicle";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getChronicleDetail } from "@/lib/chronicles";
import LinkButton from "@/Components/LinkButton";

async function fetchChronicleId({ params }) {
  return getChronicleDetail(params.id);
}
export default function ChronicleDetailRoute() {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      {/* <Chronicle title={title} text={text} url={`chronicles/${id}`} /> */}
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      <LinkButton to={navigate(-1)} children={"Zurück"} secondary></LinkButton>
    </div>
  );
}

ChronicleDetailRoute.loader = fetchChronicleId;
