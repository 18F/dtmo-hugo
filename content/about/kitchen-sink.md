---
title: Kitchen Sink
description: Test to show several USWDS components on one page
layout: content
lastmod: 2019-12-09
---

# USWDS Kitchen Sink

The purpose of this page is to demonstrate the implementation of various USWDS components as Hugo shortcodes.

## Accordion

An accordion is a list of headers that hide or reveal additional content when selected. [[\[USWDS documentation\]](https://designsystem.digital.gov/components/accordion/)

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
* `heading` specifies the bold text at the top of the alert (optional).
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
