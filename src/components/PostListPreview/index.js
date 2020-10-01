import React from 'react';
import PostItem from '../PostItem';

import * as S from './styled';

const PostListPreview = ({postList}) => (
    <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                image,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
              <PostItem
                slug={`/blog/${slug}`}
                background={background}
                category={category}
                date={date}
                timeToRead={timeToRead}
                title={title}
                description={description}
                image={image}
                key={slug}
              />
            ),
        )}
    </S.ListWrapper>
)

export default PostListPreview;