import { useEffect, FC } from "react";
import { observer } from "mobx-react-lite";
import Display from "../../components/Display";
import characterStore from "../../stores/Characters";

const CharactersRoute: FC = () => {
  const { characters, loading } = characterStore;

  useEffect(() => {
    characterStore.getPostsList();
  }, []);

  return (
    <div>
      <Display character =  {characters} />
    </div>
  );
};

export default observer(CharactersRoute);
