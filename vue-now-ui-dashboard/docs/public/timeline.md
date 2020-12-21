# Timeline

We created a set of components that can help you display a history of something 
which looks fun and user friendly. 

<hr>

To use the timeline components, first import them:

```js
import {TimeLine, TimeLineItem} from 'src/components'
```

Global usage

```js
Vue.component(TimeLine)
Vue.component(TimeLineItem)
```
Local usage
```js
export default {
 components: {
   TimeLine,
   TimeLineItem
 }
}
```

## Timeline on both sides


```html
/*vue*/
<desc>
</desc>
<template>
    <div style="background-color: #ebecf1;">
      <time-line>
          <time-line-item inverted badge-type="danger" badge-icon="now-ui-icons objects_planet">
            <span slot="header" class="badge badge-danger">Some title</span>
            <p slot="content">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family
              We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
              at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
  
            <h6 slot="footer">
              <i class="ti-time"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>
  
          <time-line-item badge-type="success" badge-icon="now-ui-icons shopping_tag-content">
            <span slot="header" class="badge badge-success">Another Title</span>
            <p slot="content">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album
              to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from
              shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>
  
          <time-line-item inverted badge-type="info" badge-icon="now-ui-icons shopping_delivery-fast">
            <span slot="header" class="badge badge-info">Another Title</span>
            <div slot="content">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @
                Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my
                favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
              <span slot="footer">
                  <drop-down>
                     <n-button slot="title" type="info" round block class="dropdown-toggle">
                          <i class="now-ui-icons design_bullet-list-67"></i>
                        </n-button>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </drop-down>
                </span>
            </div>
          </time-line-item>
  
          <time-line-item badge-type="warning" badge-icon="now-ui-icons ui-1_email-85">
            <span slot="header" class="badge badge-warning">Another Title</span>
            <p slot="content">
              Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm
              about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
              whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue
              team</p>
  
          </time-line-item>
  
        </time-line>
    </div>
</template>

<script>
    export default {}
</script>
```

### Timeline on one side

```html
/*vue*/
<desc>
</desc>
<template>
    <div style="background-color: #ebecf1;">
      <time-line type="simple">
          <time-line-item inverted badge-type="danger" badge-icon="now-ui-icons objects_planet">
            <span slot="header" class="badge badge-danger">Some title</span>
            <p slot="content">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family
              We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
              at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
  
            <h6 slot="footer">
              <i class="ti-time"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>
  
          <time-line-item inverted badge-type="success" badge-icon="now-ui-icons shopping_tag-content">
            <span slot="header" class="badge badge-success">Another Title</span>
            <p slot="content">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album
              to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from
              shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>
  
          <time-line-item inverted badge-type="info" badge-icon="now-ui-icons shopping_delivery-fast">
            <span slot="header" class="badge badge-info">Another Title</span>
            <div slot="content">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @
                Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my
                favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
              <span slot="footer">
                  <drop-down>
                     <n-button slot="title" type="info" round block class="dropdown-toggle">
                          <i class="now-ui-icons design_bullet-list-67"></i>
                        </n-button>
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </drop-down>
                </span>
            </div>
          </time-line-item>
  
          <time-line-item inverted badge-type="warning" badge-icon="now-ui-icons ui-1_email-85">
            <span slot="header" class="badge badge-warning">Another Title</span>
            <p slot="content">
              Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm
              about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
              whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue
              team</p>
  
          </time-line-item>
  
        </time-line>
    </div>
</template>

<script>
    export default {}
</script>
```



### Timeline Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type | Timeline type (by providing a "simple" value timeline will take full parent element width)   | string  |       ''/simple        |     -     |


### Timeline Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for the timeline |


### Timeline Item Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| inverted | Whether item should be on the right side | boolean  |       true/false        |     false     |
| badgeType | Item badge color | string  |       primary/success/danger/info/warning/default        |     success     |
| badgeIcon | Item badge icon | string  |       -        |     -     |


### Timeline Item Slots
| Name | Description |
|---------- |-------- |
|  header  |  Content for item header |
|  content  | Content for item content |
|  footer  | Content for item footer |
