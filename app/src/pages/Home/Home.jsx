import React, { useState } from "react";
import Scene from "@components/Scene";
import Shoe from "@components/Models/Shoe";
import Picker from "@components/Picker";
import SceneWrapper from "@components/Wrappers/SceneWrapper";
import ProductWrapper from "@components/Wrappers/ProductWrapper";
import { getSelectedMesh } from "@states/selectedMesh";
import ToggleGroup from "@components/ToggleGroup/ToggleGroup";
import { useAtom } from "jotai";
import CenteredWrapper from "@components/Wrappers/CenteredWrapper";
import Cta from "@components/Cta/Cta";
import CtaContainer from "@containers/CtaContainer/CtaContainer";
import BookMark from "@components/Icons/BookMark";
import { HomeWrapper } from "./HomeWrapper";
import product from "@components/object/product";
import AccordionRad from "@components/Accordion/Accordion";
import ProductHeader from "@containers/ProductHeader/ProductHeader";
import BorderedWrapper from "@components/Wrappers/BorderedWrapper";

function Home() {
  const [isDisplay, setDisplay] = useState(false);
  const [mesh] = useAtom(getSelectedMesh);
  return (
    <HomeWrapper>
      <SceneWrapper>
        <Scene>
          <Shoe />
        </Scene>
        {mesh.name && <Picker />}
      </SceneWrapper>
      <ProductWrapper>
        <ProductHeader
          title={product.title}
          price={product.price}
          description={product.description}
        />
        <CtaContainer>
          <Cta width="quarter" color="ghost">
            <BookMark width="36" height="36" />
          </Cta>
          <Cta
            onClick={() => setDisplay(!isDisplay)}
            width="full"
            color="default"
          >
            Show available size
          </Cta>
        </CtaContainer>
        <CenteredWrapper>
          {isDisplay && (
            <ToggleGroup
              items={product.available_size}
              defaultValue={product.default_size}
            />
          )}
        </CenteredWrapper>
        <AccordionRad
          data={product.more}
          defaultValue={product.more[1].title}
        />
        <BorderedWrapper>
          <Cta width="full" color="default">
            Add to cart
          </Cta>
        </BorderedWrapper>
      </ProductWrapper>
    </HomeWrapper>
  );
}

export default Home;
