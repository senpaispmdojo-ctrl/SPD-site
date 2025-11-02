import { createFileRoute } from "@tanstack/react-router";
import BeginTraining from "../pages/BeginTraining";

export const Route = createFileRoute("/begin-training")({
  component: BeginTraining,
});
