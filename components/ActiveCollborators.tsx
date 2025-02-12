import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";
import React from "react";

type Props = {};

const ActiveCollborators = (props: Props) => {
  const others = useOthers();

  const collbatorators = others.map((other) => other.info);

  return (
    <ul className="collaborators-list">
      {collbatorators.map(({ id, avatar, name, color }) => (
        <li key={id}>
          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="inline-block size-8 rounded-full ring-2 ring-dark-100"
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollborators;
