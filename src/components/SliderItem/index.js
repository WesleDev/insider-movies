import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { BannerItem, Container, Rate, RateContainer, Title } from './styles';

function SliderItem({ data, navigatePage }) {
  return (
    <Container activeOpacity={0.7} onPress={() => navigatePage(data)}>
      <BannerItem
        source={{
          uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
        }}
      />

      <Title numberOfLines={1}>{data.title}</Title>
      <RateContainer>
        <Ionicons name='md-star' size={12} color='#E7A74e' />
        <Rate>{data.vote_average}</Rate>
      </RateContainer>
    </Container>
  );
}

export default SliderItem;
