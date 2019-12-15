# Quill Video Responsive

A module for Quill rich text editor to allow embeded video to be responsive. This module overrides the default video tag and each video inserted will be wrapped with responsive htlm classes.

## Usage

### Webpack/ES6

```javascript
import Quill from 'quill';
import VideoResponsive from 'quill-video-responsive';
```

### Script Tag

Copy dist/video-repsonsive.min.js into your web root or include from node_modules

```html
<script src="/node_modules/quill-video-responsive/video-repsonsive.min.js"></script>
```

/!\ You also need to add this CSS in you app

```css
.ql-video-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
}

.ql-video-container iframe,
.ql-video-container object,
.ql-video-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```
