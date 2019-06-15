import React from "react";

//might want to use the String.raw line to keep formatting of text
let thisStory = String.raw`    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
  blandit at quam at ultrices. Ut sagittis porta accumsan. Praesent
  commodo dui dictum felis rhoncus, a bibendum felis egestas. Pellentesque
  habitant morbi tristique senectus et netus et malesuada fames ac turpis
  egestas. Maecenas vel elit vulputate, porta quam et, tempor risus.
  Curabitur at sapien sed magna fermentum tristique nec ut erat. Nullam
  posuere est at tempor commodo. Fusce sollicitudin suscipit accumsan.
  Etiam varius ac massa ac molestie. Vestibulum massa nisi, venenatis a
  sem ac, imperdiet tincidunt eros. Aliquam et lectus sit amet urna porta
  dictum. Donec nec orci facilisis, tempus ligula non, pellentesque odio.

      Nunc sed ante vitae risus finibus semper et ac odio. Quisque id faucibus
  ex. Ut in pulvinar justo. Suspendisse pharetra massa elementum, lobortiss
  dui in, euismod enim. Morbi malesuada aliquet ex. Maecenas vel nisi nec
  ligula sollicitudin volutpat at accumsan libero. Maecenas non justo ut
  libero egestas dictum. Pellentesque tincidunt ligula nisl, et pulvinar
  magna fermentum eu. Proin blandit ante eu elit elementum, eu bibendum
  lorem tincidunt. Fusce auctor sed lectus ac ornare. Aliquam viverra
  tempus augue nec vulputate. Nullam maximus accumsan risus, nec blandit
  eros hendrerit sed. Curabitur pharetra eleifend neque nec vehicula.
  
      Mauris nec luctus mi. Morbi volutpat, eros convallis gravida pharetra,
  lorem ex luctus lorem, malesuada consequat justo lorem vitae odio.
  Phasellus vitae sapien nisl. Nullam sed aliquet ipsum. Nulla in
  ullamcorper lorem. Maecenas lacinia urna sed semper faucibus. Vivamus
  auctor velit lorem, a laoreet urna ornare nec. Aliquam gravida consequat
  est, quis consectetur tortor pharetra sit amet. Praesent eu risus vel
  est pharetra ullamcorper eu in nisi. Proin fringilla ac tellus eget
  auctor. Pellentesque dignissim at erat ac ultrices.`

function Story() {
  
  return (
    <div className="storyBox">
      <card className="gemStory">
        <pre>{thisStory}</pre>
      </card>
    </div>
  );
}

export default Story;
