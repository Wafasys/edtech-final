import { redirect } from "next/navigation";

export default function PinnedInstructorReplyPage() {
  redirect("/student/lessons?tab=comments");
}
