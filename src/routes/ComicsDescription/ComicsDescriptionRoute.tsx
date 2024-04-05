import React from "react";

import Description from "../../components/Description/Description";
import comicsStore from "../../stores/Comics";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ComicsDescriptionRoute: React.FC = () => {
  const { comic, loading } = comicsStore;
  const { id } = useParams();
  useEffect(() => {
    comicsStore.getComics(Number(id));
  }, []);
  return (
    <div>
      {loading ? "Loading..." : null}

     { comic !== null ?  <Description description={comic}/> : "" } 
    </div>
  );
};

export default observer(ComicsDescriptionRoute);
