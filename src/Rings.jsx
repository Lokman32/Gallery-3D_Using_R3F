import { useEffect, useState } from "react";
import { TextureLoader } from "three";
import Ring from "./Ring";

export default function Rings() {
  const [Textures, setTextures] = useState([]);
  const loader = new TextureLoader();

  useEffect(() => {
    const textureData = [];
    const textureDetails = Array.from({ length: 8 }, (_, i) => ({
      angl: 45 * i,
      txPath: `/imgs/img${i + 1}.avif`,
    }));

    textureDetails.forEach((ele) => {
      loader.load(ele.txPath, (loadedTexture) => {
        textureData.push({ angl: ele.angl, tx: loadedTexture });

        if (textureData.length === textureDetails.length) {
          setTextures(textureData);
        }
      });
    });
  }, []);

  return (
    <group>
    {Textures.map((e,i)=><Ring key={i} angl={e.angl} txtr={e.tx}/>)}
    </group>
  )
}
