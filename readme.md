## Nested Link

A JS component that allows for links nested inside a block level link, via a data attribute.

## What's that good for?

Yeah, so say you have a blog/content site and the post pattern consists of an article with a link wrapping all the content - image, title, excerpt, etc. But then you want to also include the post's taxonomy, with a link to the taxonomy's archive. You'd have to link each item separately, or at least open, close, then open the link again. Kinda lame. 

With this, you don't have to do that. Nice right? 

Instead, you can just put your taxonomy in a heading or span tag, and then attach the data attribute ```[data-nested-link='']``` with the taxonomy's archive link as the value. 

Now just style that taxonomy element like you would any ole link, and you're golden. On click, a wee bit of JS creates a link on the fly.


## Example

```html
<article class="card">
  <a class="card__link" href="/post-link">
    <figure class="card__figure">
      <img src="https://source.unsplash.com/HzEb3ZRtV88/900x600"/>
    </figure>
    <div class="card__content">
      <!-- Here's the data att for our nested link -->
      <span class="card__meta" data-nested-link="http://yourmom.com/tax-archive">Nested Cat Link</span>
      <h3 class="card__title">Girls ain't nothing but trouble</h3>
      <p class="card__text">Listen homeboys don't mean to bust your bubble, but girls of the world ain't nothing but trouble.</p>
      <span class="card__btn">Read More</span>
    </div>
 </a>
</article>  
```

## Demo

[Nested Links CodePen Demo](https://codepen.io/StephenScaff/pen/MoxRQO?editors=1010)
