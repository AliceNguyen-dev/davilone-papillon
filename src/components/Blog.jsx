import React from 'react';

import logoBlog from '../assets/img/Davilone-reg.png'

import './Blog.scss'

function Blog() {
  return (
    <div>
      <div className="d-blog">
        <div className="d--log">
          <img className='d-log-ic' src={logoBlog} alt="blogicone" />
        </div>

        <div className="d-blog-int">
          <div className="d-blog-main">
            <h1 className="tit-blog"><span className="blog-d-title">Blog </span>Davilone Papillon</h1>
            <p className="d-blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus corrupti nobis, aut quam in eos mollitia totam quibusdam consequatur hic eligendi ab perspiciatis sit, obcaecati cum molestias dolor optio?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;