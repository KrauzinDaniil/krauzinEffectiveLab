import React from "react";

import Description from "../../components/Description/Description";
import characterStore from "../../stores/Characters.ts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const CharacterDescriptionRoute: React.FC = () => {
    
  const { character, loading } = characterStore;
  const { id } = useParams();
  useEffect(() => {
    characterStore.getCharacterDetails(Number(id));
  }, []);

  return (
    <div>
      {loading ? "Loading..." : null}

      <Description description={ character}/>

    </div>
  );
};

export default observer(CharacterDescriptionRoute);
