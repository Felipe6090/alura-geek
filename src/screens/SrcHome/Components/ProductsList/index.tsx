import Image from "next/image";
import Link from "next/link";

import Products from "../../../../mocks/productsList";

import * as S from "./styles";
import * as T from "../../../../Components/Typography";
import * as I from "../../../../Components/inputs";

export default function ProductsList() {
  return (
    <S.MainDiv>
      {Products.map((section) => {
        return (
          <S.SectionDiv key={section.id}>
            <S.DefaultRow>
              <T.SectionTitle>{section.sectionDescription}</T.SectionTitle>
              <Link href="/" replace passHref>
                <I.SeeAllButton>Ver Tudo</I.SeeAllButton>
              </Link>
            </S.DefaultRow>

            <S.ProductsRow>
              {section.products.map((product) => {
                return (
                  <S.ProductDiv key={product.id}>
                    <Image
                      src={product.image}
                      alt={product.imgAlt}
                      layout="fixed"
                      width="176"
                      height="174"
                    />

                    <T.ProductTitle>{product.name}</T.ProductTitle>

                    <T.ProductPrice>R$ {product.price} </T.ProductPrice>

                    <Link href="/" replace passHref>
                      <T.DefaultLink>Ver Produto</T.DefaultLink>
                    </Link>
                  </S.ProductDiv>
                );
              })}
            </S.ProductsRow>
          </S.SectionDiv>
        );
      })}
    </S.MainDiv>
  );
}
