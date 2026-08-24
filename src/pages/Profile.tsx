import H1 from "../components/Headings/H1";
import P from "../components/Headings/P";
import Spacer from "../components/Spacer";
import PageTransition from "@/components/PageTransition";
import { ProfileForm } from "@/components/Form/ProfileForm";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <Spacer height={50} />
      <H1>{t("profileForm.title")}</H1>
      <P className="my-5 mb-8">{t("profileForm.description")}</P>
      <div className="w-[500px]">
        <ProfileForm />
      </div>
    </PageTransition>
  );
}

export default Profile;
