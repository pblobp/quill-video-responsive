## Quill Video Responsive

A module for Quill rich text editor to allow embeded video to be responsive. This module overrides the default video blot and when a new video is embed it will be wrapped with responsive HTML divs.

### Usage

#### Webpack/ES6

```javascript
import Quill from 'quill';
import VideoResponsive from 'quill-video-responsive';
```

#### Script Tag

Copy dist/video-repsonsive.min.js into your web root or include from node_modules

```html
<script src="/node_modules/quill-video-responsive/video-repsonsive.min.js"></script>
```

/!\ You also need to add this CSS in you app

```css
.ql-video-wrapper {
	width: 80%;
	margin: auto;
}

.ql-video-inner {
	padding-top:56.25%;
	position:relative;
	height:0;
}

.ql-video-inner iframe,
.ql-video-inner object,
.ql-video-inner embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```

### Roadmap

* Add option to customize video size (25%, 50%, 75%, 80%, 90%, 100%...)

