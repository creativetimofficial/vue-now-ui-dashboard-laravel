# Cards

Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.

```js
import {Card, StatsCard} from 'src/components'
```

## Local usage
```js
components: {
  Card,
  StatsCard
}
```

## Global usage
```js
Vue.component(Card)
Vue.component(StatsCard)
```

## Example Card

```html
/*vue*/
<desc>
</desc>
<template>
  <card style="width: 20rem;">
    <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1618c103586%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1618c103586%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <div>
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <n-button type="primary">Go somewhere</n-button>
    </div>
  </card>
</template>

<script>
  export default {}
</script>
```

## Titles, text, and links

Card titles are used by adding `.card-title` to a `<h*>` tag. 
In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag.
Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. 
If the `.card-title` and the `.card-subtitle` items are placed in a `.card-body` (default slot contains a `card-body` class) item, the card title and subtitle are aligned nicely.

```html
/*vue*/
<desc>
</desc>
<template>
  <card style="width: 20rem;">
      <h4 class="card-title">Card title</h4>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
  </card>
</template>

<script>
  export default {}
</script>
```

## Images
`.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card.
 Text within `.card-text` can also be styled with the standard HTML tags.
 
```html
/*vue*/
<desc>
</desc>
<template>
 <card style="width: 20rem;">
    <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1618c103586%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1618c103586%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </card>
</template>

<script>
 export default {}
</script>
```

## List groups
Create lists of content in a card with a flush list group.

```html
/*vue*/
<desc>
</desc>
<template>
 <card style="width: 20rem;">
   <ul slot="raw-content" class="list-group list-group-flush">
     <li class="list-group-item">Cras justo odio</li>
     <li class="list-group-item">Dapibus ac facilisis in</li>
     <li class="list-group-item">Vestibulum at eros</li>
   </ul>   
  </card>
</template>

<script>
 export default {}
</script>
```

## Header and footer

```html
/*vue*/
<desc>
</desc>
<template>
 <card class="card-nav-tabs" header-classes="card-header-warning">
   <div slot="header">
     Featured
   </div>
   <h4 class="card-title">Special title treatment</h4>
   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <n-button type="primary">Go somewhere</n-button>
  </card>
</template>

<script>
 export default {}
</script>
```

## Quote card
```html
/*vue*/
<desc>
</desc>
<template>
 <card class="card-nav-tabs" header-classes="card-header-success">
   <div slot="header">
     Quote
   </div>
  <blockquote class="blockquote mb-0">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
  </card>
</template>

<script>
 export default {}
</script>
```

## Centered content

```html
/*vue*/
<desc>
</desc>
<template>
 <card class="card-nav-tabs text-center" header-classes="card-header-primary">
   <div slot="header">
     Quote
   </div>
  <h4 class="card-title">Special title treatment</h4>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <n-button type="primary">Go somewhere</n-button>
  <div slot="footer" class="text-muted">
   2 days ago
  </div>
  </card>
</template>

<script>
 export default {}
</script>
```


## Widget Card
```html
/*vue*/
<desc>
</desc>
<template>
  <card class="card-contributions text-center"
        title="3,521"
        sub-title="Total Public Contributions"
        description="After a very successful two-year run, we’re going to be changing the way that contributions work.">
    <div class="row" slot="footer">
      <div class="col-6">
        <div class="card-stats justify-content-center">
          <n-switch v-model="allContributions" on-text="ON" off-text="OFF"></n-switch>
          <span>All public contributions</span>
        </div>
      </div>
      <div class="col-6">
        <div class="card-stats justify-content-center">
          <n-switch v-model="pastWeekContributions" on-text="ON" off-text="OFF"></n-switch>
          <span>Past week contributions</span>
        </div>
      </div>
    </div>

  </card>
</template>

<script>
  export default {
    data(){
      return {
        allContributions: true,
        pastWeekContributions: false,
      }
    }
  }
</script>
```

## Stats card
```html
/*vue*/
<desc>
</desc>
<template>
 <stats-card
   type="danger"
   title="1058"
   subTitle="Messages"
   icon="now-ui-icons ui-2_chat-round">
   <span slot="footer">
     <i class="now-ui-icons arrows-1_refresh-69"></i>
     Update now
   </span>
 </stats-card>
</template>

<script>
  export default {}
</script>
```

### StatsCard Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Card type   | string  |   primary/danger/success/info/warning        |     primary     |
| icon     | Card icon   | string  |   -        |     -     |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |

### StatsCard Slots
| Name | Description |
|---------- |-------- |
|  icon  | Content for card icon |
|  default  | Default card content |
|  footer  | Content for card footer |

### Card Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Card title   | string  |   -        |     —     |
| subTitle     | Card subtitle (displayed above with smaller font)  | string  |      -        |     -     |
| category     | Card category text (displayed above header)  | string  |      -        |     -     |
| description     | Card description text (displayed below title and subTitle)  | string  |      -        |     -     |
| noFooterLine     | Whether to hide the footer line | boolean  |      true/false        |     false     |
| plain     | Whether the card has no white background | boolean  |      true/false        |     false     |
| cardBodyClasses     | Card body wrapper div classes | string/object/array  |      -        |     -     |


### Card Slots
| Name | Description |
|---------- |-------- |
|  default  | Content for card body |
|  header  | Content for card header |
|  image  | Content for card image (displayed above header) |
|  footer  | Content for card footer |
