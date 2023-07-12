import Image from "next/image";
import Title from "./Title";
import List from "./List";

export default function Pokemon() {
  return (
    <div className='py-3 px-5 overflow-hidden min-w-max'>
      <Title />
      <List />
      <div className='fixed top-0 right-0 opacity-40 translate-x-[96px] translate-y-[-96px]'>
        <Image
          src='/pocketball.svg'
          alt='pocketball'
          width={288}
          height={288}
        />
      </div>
    </div>
  );
}
