import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../../components/Description/Description";
import { DescriptionProps } from "../../types/descriptionProps";

const FavouriteDetailsRoute: React.FC = () => {
    const [description, setDescription] = useState<DescriptionProps | null>(null);

    const { id } = useParams();

    useEffect(() => {
        const storedDescription = localStorage.getItem(Number(id).toString());
        if (storedDescription) {
            
            setDescription(JSON.parse(storedDescription));
        }

    }, [id]);
    
  return (
    <div>
    { description !== null ? <Description description={description} isFavourited ={true}/> : "" } 
    </div>
  );
};

export default FavouriteDetailsRoute;
