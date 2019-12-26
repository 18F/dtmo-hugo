---
title: Kitchen Sink
description: Test to show several USWDS components on one page
layout: content
lastmod: 2019-12-09
---

# USWDS Kitchen Sink

The purpose of this page is to demonstrate the implementation of various USWDS components as Hugo shortcodes.

## Accordion

An accordion is a list of headers that hide or reveal additional content when selected. [\[USWDS documentation\]](https://designsystem.digital.gov/components/accordion/)

### Options

The following options apply to the `accordion` shortcode:

* `headingLevel` takes a value between 1 and 6 and should be used to make sure that the generated HTML has the right heading level i.e. `headingLevel=3` creates `<h3>` tags.
* `multiselect=true` will create an accordion that allows multiple sections to be open at the same time.
* `bordered="true"` adds borders to the content sections when they are unfolded.

The `accordion-item` shortcode takes one attribute:

* `headingText` specifies the text to appear in the accordion headings. This text will always be visible.

### Sample usage

{{< highlight go >}}
{{</* accordion headingLevel="3" bordered="true" multiselect="true" */>}}
    {{%/* accordion-item headingText="First Amendment" */%}}
    Congress shall make no law respecting an establishment of religion,
    or prohibiting the free exercise thereof; or abridging the freedom of speech,
    or of the press; or the right of the people peaceably to assemble,
    and to petition the Government for a
    redress of grievances.{{%/* /accordion-item */%}}
{{</* /accordion */>}}
{{< /highlight >}}

{{< accordion headingLevel="3" bordered="true" multiselect="true">}}
  {{% accordion-item headingText="First Amendment" %}}
  Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.{{% /accordion-item %}}

  {{% accordion-item headingText="Second Amendment" %}}
  A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.

  - This is a list item
  - Another list item
  {{% /accordion-item %}}

  {{% accordion-item headingText="Third Amendment" %}}No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
  {{% /accordion-item %}}
{{< /accordion >}}

## Alert

[USWDS documentation](https://designsystem.digital.gov/components/alert/)

### Options

* `type` can be one of `info`, `success`, `warning`, or `error`
* `heading` specifies the bold text at the top of the alert. {{<tag text="optional">}}
* `icon="false"` will omit the icon.

### Sample Usage

{{< highlight go >}}
{{%/* alert heading="Look out!" type="warning" */%}}
There's a spider on your shoulder
{{%/* /alert */%}}
{{< /highlight >}}

{{% alert heading="Look out!" type="warning" %}}
There's a spider on your shoulder
{{% /alert %}}

## Tag

### Options

* `big=true` makes the tag a little bigger.

### Sample usage

{{< highlight go >}}
{{</* tag text="New!" big="true" */>}}
{{< /highlight >}}

{{< tag text="New!" big="true">}}

## YouTube

Just use the id for the video as the single argument to this tag. The id is the part of the video url that comes after `v=` (i.e. if the URL for the video is `https://www.youtube.com/watch?v=PhhC_N6Bm_s`, the id is `PhhC_N6Bm_s`)

{{<highlight go>}}
{{</* youtube PhhC_N6Bm_s */>}}
{{< /highlight >}}

{{< youtube PhhC_N6Bm_s>}}

## Vimeo

Vimeo videos work the same way, but the id for the video is just the last part fo the URL (`https://vimeo.com/57350121` `57350121`)

{{<highlight go>}}
{{</* vimeo 57350121 */>}}
{{< /highlight >}}

{{< vimeo 57350121>}}

## Figure

Markdown provides syntax for including images, but this shortcode provides an easy way to use the semantic `<figure>` element.

### Options

At a minimum, the `figure` shortcode should have the following attributes:

* `src` is just the path to the image file
* `alt` specifies the alt text for the image that will appear either if the image cannot load or if the browser is using assistive technology.

Some additional options:

* `caption` will place a textual caption below the image
* This shortcode is built into Hugo, so you can find several other options in [Hugo's documentation](https://gohugo.io/content-management/shortcodes/#figure).

### Sample Usage

{{< highlight go >}}
{{</* figure src="pup-on-a-pillow.jpg" alt="a cute dog rests its head on a pillow" */>}}
{{< /highlight >}}

{{< figure src="pup-on-a-pillow.jpg" alt="a cute dog rests its head on a pillow">}}
