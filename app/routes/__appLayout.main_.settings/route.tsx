import { Form, MetaFunction } from "@remix-run/react";
import { motion } from "motion/react";
import CheckboxInputVariant from "~/components/form/checkboxInputVariant";
import Input from "~/components/form/input";
import { useUserData } from "~/contexts/user.context";

export const meta: MetaFunction = () => {
  return [
    { title: "Zaimu - Settings" },
    {
      name: "description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { property: "og:url", content: "https://zaimu-finance.pages.dev/" },
    { property: "og:type", content: "website" },
    { property: "og:tittle", content: "Zaimu - Manage your Money" },
    { property: "og:site_name", content: "Zaimu" },
    {
      property: "og:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://zaimu-finance.pages.dev/" },
    { name: "twitter:title", content: "Zaimu - Manage your Money" },
    {
      name: "twitter:description",
      content:
        "Zaimu is the easiest way to track your money, take control of your finances and save to achieve your dreams.",
    },
  ];
};

export default function Settings() {
  const { user } = useUserData();

  return (
    <section className="grid pb-12">
      <Form className="flex flex-col gap-12">
        <fieldset className="flex flex-col gap-8">
          <motion.span
            className="font-bold text-neutral-700 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Personal information
          </motion.span>

          <div className="flex gap-12 items-center">
            <img
              className="aspect-auto rounded-full"
              width={300}
              height={300}
              src={user.profilePhoto?.url}
              alt={`${user.name} ${user.lastName} profile`}
            />

            <fieldset className="flex w-full h-fit gap-12">
              <div className="w-full flex flex-col gap-8">
                <Input
                  placeholder="First name"
                  type="text"
                  name="First name"
                  defaultValue={user.name}
                />
                <Input
                  placeholder="Last name"
                  type="text"
                  name="Last name"
                  defaultValue={user.lastName}
                />
                <Input
                  placeholder="Profession"
                  type="text"
                  name="Profession"
                  defaultValue={user.profession}
                />
              </div>

              <div className="w-full flex flex-col gap-8">
                <Input
                  placeholder="Email"
                  type="email"
                  name="Email"
                  defaultValue={user.email}
                />
                <Input
                  placeholder="Phone number (Optional)"
                  type="tel"
                  name="Phone number (Optional)"
                  defaultValue={user.phoneNumber}
                />
              </div>
            </fieldset>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <motion.span
            className="font-bold text-neutral-700 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Preferences
          </motion.span>

          <div className="flex gap-12 w-full">
            <div className="flex flex-col w-full gap-8">
              <Input
                placeholder="Language"
                type="text"
                name="Language"
                defaultValue={user.settings.language}
              />
              <Input
                placeholder="Appearance"
                type="text"
                name="Appearance"
                defaultValue={user.settings.appearance}
              />
            </div>
            <div className="flex flex-col w-full gap-8">
              <Input
                placeholder="Weekly start day"
                type="text"
                name="Weekly start day"
                defaultValue={user.settings.weekStart}
              />
              <Input
                placeholder="Monthly start day"
                type="text"
                name="Monthly start day"
                defaultValue={user.settings.monthStart?.toString()}
              />
            </div>
            <div className="flex flex-col w-full gap-8">
              <Input
                placeholder="Currency"
                type="text"
                name="Currency"
                defaultValue={user.settings.currency}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <motion.span
            className="font-bold text-neutral-700 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Notifications
          </motion.span>

          <div className="flex gap-12 w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <CheckboxInputVariant
                text="Email notifications"
                name="emailNotification"
                defaultValue={user.settings.notifications.email}
              />
              <CheckboxInputVariant
                text="Push notifications"
                name="puschNotification"
                defaultValue={user.settings.notifications.push}
              />
              <CheckboxInputVariant
                text="WhatsApp notifications"
                name="whatsappNotification"
                defaultValue={user.settings.notifications.whatsApp}
              />
            </div>

            <div className="flex w-1 h-auto rounded-full bg-neutral-200" />

            <div className="flex flex-col gap-4 w-full">
              <CheckboxInputVariant
                text="Desktop notifications"
                name="desktopNotification"
                defaultValue={user.settings.notifications.desktop}
              />
              <CheckboxInputVariant
                text="Zaimu updates"
                name="zaimuUpdates"
                defaultValue={user.settings.notifications.zaimuUpdates}
              />
              <CheckboxInputVariant
                text="Budget Alerts"
                name="budgetAlerts"
                defaultValue={user.settings.notifications.budgetAlerts}
              />
            </div>

            <div className="flex w-1 h-auto rounded-full bg-neutral-200" />

            <div className="flex flex-col gap-4 w-full">
              <CheckboxInputVariant
                text="Goals alerts"
                name="goalsAlerts"
                defaultValue={user.settings.notifications.goals}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-8">
          <motion.span
            className="font-bold text-neutral-700 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Reports
          </motion.span>

          <div className="flex gap-12 w-full h-full">
            <div className="flex flex-col gap-4 w-full">
              <CheckboxInputVariant
                text="Weekly report"
                name="weeklyReport"
                defaultValue={user.settings.notifications.weeklyReport}
              />
              <CheckboxInputVariant
                text="Monthly report"
                name="monthlyReport"
                defaultValue={user.settings.notifications.monthlyReport}
              />
            </div>

            <div className="flex w-1 h-auto rounded-full bg-neutral-200" />

            <div className="flex flex-col gap-4 w-full"></div>

            <div className="flex w-1 h-auto rounded-full" />

            <div className="flex flex-col gap-4 w-full"></div>
          </div>
        </fieldset>
      </Form>
    </section>
  );
}
