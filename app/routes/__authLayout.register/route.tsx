import BasicLink from "~/components/common/links/basicLink";
import FormCard from "~/components/form/formCard";
import { registerFirst } from "~/data/form/auth";
import { path } from "~/data/paths/paths";

export default function Register() {
  return (
    <section className="flex flex-col justify-between w-6/10 items-center py-10 relative">
      <div className="flex gap-1.5 w-1/2 items-center">
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-transparent border-2 border-primary" />
        <div className="bg-neutral-200 h-0.75 rounded-full w-full" />
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-neutral-200" />
        <div className="bg-neutral-200 h-0.75 rounded-full w-full" />
        <div className="flex min-w-2.5 h-2.5 rounded-full bg-neutral-200" />
      </div>

      <FormCard
        title="Let's get started!"
        description=""
        footer
        buttonText="Next step"
        buttonType="button"
        inputs={registerFirst}
        checkBox={{
          render: true,
          text: "(Optional) Send me emails with Zaimu's updates, news and special offers. You can disable this anytime.",
        }}
      />

      {/*
        <FormCard
          title="Let's get started!"
          description=""
          footer
          buttonText="Next step"
          inputs={registerFirst}
          checkBox={{
            render: true,
            text: "(Optional) Send me emails with Zaimu's updates, news and special offers. You can disable this anytime.",
          }}
        />

        <FormCard
          title="Customize your profile!"
          description=""
          footer
          buttonText="Next step"
          inputs={registerSecond}
          checkBox={{ render: false, text: "" }}
        />

        <FormCard
          title="App settings!"
          description=""
          footer
          buttonText="Register"
          inputs={registerThird}
          checkBox={{
            render: true,
            text: "(Optional) Send WhatsApp reminders",
          }}
        />+*/}

      <p className="text-neutral-500">
        Already have an account? <BasicLink text="Login" link={path.login} />
      </p>
    </section>
  );
}
