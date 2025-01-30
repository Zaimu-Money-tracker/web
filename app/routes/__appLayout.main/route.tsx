import { useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonLink from "~/components/common/buttons/buttonLink";
import { EnvConfig } from "~/config/env.config";
import User from "~/interfaces/user/user.interface";

const env = EnvConfig();

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${env.zaimu_api_url}/user`, { withCredentials: true })
        .then((res) => {
          return setUser(res.data);
        })
        .catch((err) => {
          navigate("/");
          return console.log(err);
        });
    };

    getUser();
  }, [navigate]);

  if (!user) return;

  return (
    <>
      <div className="flex flex-col gap-10 w-fit h-screen items-center justify-center">
        <div className="flex flex-col gap-2 max-w-md text-center">
          <span className="text-6xl font-black text-neutral-700">
            Good to see you, <span className="text-primary">{user.name}!</span>
          </span>
          <p className="text-neutral-500 font-semibold text-lg">
            Saving money is the best way to make your dreams come true.
            Don&apos;t worry, it&apos;s easier than you think! 🌱
          </p>
        </div>

        <div className="flex gap-8">
          <ButtonLink text="Take a look" link=" " type="primary" />
          <ButtonLink text="Open App" link="" type="secondary" />
        </div>
      </div>
    </>
  );
}
