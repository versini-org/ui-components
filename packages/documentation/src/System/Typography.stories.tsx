/* eslint-disable react/no-unescaped-entities */

import type { Story } from "@ladle/react";

export default { title: "System/Typography" };

const CommonTemplate = ({
	intro,
	type,
}: {
	intro: any;
	type: "light" | "dark";
}) => {
	return (
		<>
			{intro}
			<pre>
				<code>{`<div className="prose prose-${type}>...</div>`}</code>
			</pre>
			<p>
				By default, Tailwind removes all of the default browser styling from
				paragraphs, headings, lists and more. This ends up being really useful
				for building application UIs because you spend less time undoing
				user-agent styles, but when you <em>really are</em> just trying to style
				some content that came from a rich-text editor in a CMS or a markdown
				file, it can be surprising and unintuitive.
			</p>
			<p>
				We get lots of complaints about it actually, with people regularly
				asking us things like:
			</p>
			<blockquote>
				<p>
					Why is Tailwind removing the default styles on my <code>h1</code>{" "}
					elements? How do I disable this? What do you mean I lose all the other
					base styles too?
				</p>
			</blockquote>
			<p>
				We hear you, but we're not convinced that simply disabling our base
				styles is what you really want. You don't want to have to remove
				annoying margins every time you use a <code>p</code> element in a piece
				of your dashboard UI. And I doubt you really want your blog posts to use
				the user-agent styles either — you want them to look <em>awesome</em>,
				not awful.
			</p>
			<p>
				The <code>@tailwindcss/typography</code> plugin is our attempt to give
				you what you <em>actually</em> want, without any of the downsides of
				doing something stupid like disabling our base styles.
			</p>
			<p>
				It adds a new <code>prose</code> and <code>prose-{type}</code> class
				that you can slap on any block of vanilla HTML content and turn it into
				a beautiful, well-formatted document:
			</p>
			<pre>{`<article className="prose prose-${type}">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating
    garlic bread with cheese to their children, with the food
    earning such an iconic status in our culture that kids will
    often dress up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be
    linked to a series of rabies cases springing up around the
    country.
  </p>
  <!-- ... -->
</article>`}</pre>
			<h2>What to expect from here on out</h2>
			<p>
				What follows from here is just a bunch of absolute nonsense I've written
				to dogfood the plugin itself. It includes every sensible typographic
				element I could think of, like <strong>bold text</strong>, unordered
				lists, ordered lists, code blocks, block quotes,{" "}
				<em>and even italics</em>.
			</p>
			<p>It's important to cover all of these use cases for a few reasons:</p>
			<ol>
				<li>We want everything to look good out of the box.</li>
				<li>
					Really just the first reason, that's the whole point of the plugin.
				</li>
				<li>
					Here's a third pretend reason though a list with three items looks
					more realistic than a list with two items.
				</li>
			</ol>
			<p>Now we're going to try out another header style.</p>
			<h3>Typography should be easy</h3>
			<p>
				So that's a header for you — with any luck if we've done our job
				correctly that will look pretty reasonable.
			</p>
			<p>Something a wise person once told me about typography is:</p>
			<blockquote>
				<p>
					Typography is pretty important if you don't want your stuff to look
					like trash. Make it good then it won't be bad.
				</p>
			</blockquote>
			<p>
				It's probably important that images look okay here by default as well:
			</p>
			<figure>
				<img src="hero-14.jpg" alt="" />
				<figcaption>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old.
				</figcaption>
			</figure>
			<p>
				Now I'm going to show you an example of an unordered list to make sure
				that looks good, too:
			</p>
			<ul>
				<li>So here is the first item in this list.</li>
				<li>In this example we're keeping the items short.</li>
				<li>Later, we'll use longer, more complex list items.</li>
			</ul>
			<p>And that's the end of this section.</p>
			<h2>What if we stack headings?</h2>
			<h3>We should make sure that looks good, too.</h3>
			<p>
				Sometimes you have headings directly underneath each other. In those
				cases you often have to undo the top margin on the second heading
				because it usually looks better for the headings to be closer together
				than a paragraph followed by a heading should be.
			</p>
			<h3>When a heading comes after a paragraph...</h3>
			<p>
				When a heading comes after a paragraph, we need a bit more space, like I
				already mentioned above. Now let's see what a more complex list would
				look like.
			</p>

			<ul>
				<li>
					<p>
						<strong>
							I often do this thing where list items have headings.
						</strong>
					</p>
					<p>
						For some reason I think this looks cool which is unfortunate because
						it's pretty annoying to get the styles right.
					</p>
					<p>
						I often have two or three paragraphs in these list items, too, so
						the hard part is getting the spacing between the paragraphs, list
						item heading, and separate list items to all make sense. Pretty
						tough honestly, you could make a strong argument that you just
						shouldn't write this way.
					</p>
				</li>
				<li>
					<p>
						<strong>Since this is a list, I need at least two items.</strong>
					</p>
					<p>
						I explained what I'm doing already in the previous list item, but a
						list wouldn't be a list if it only had one item, and we really want
						this to look realistic. That's why I've added this second list item
						so I actually have something to look at when writing the styles.
					</p>
				</li>
				<li>
					<p>
						<strong>It's not a bad idea to add a third item either.</strong>
					</p>
					<p>
						I think it probably would've been fine to just use two items but
						three is definitely not worse, and since I seem to be having no
						trouble making up arbitrary things to type, I might as well include
						it. I'm going to press <kbd>Enter</kbd> now.
					</p>
				</li>
			</ul>
			<p>
				After this sort of list I usually have a closing statement or paragraph,
				because it kinda looks weird jumping right to a heading.
			</p>
			<h4>
				We haven't used an <code>h4</code> yet
			</h4>
			<p>
				But now we have. Please don't use `h5` or `h6` in your content, Medium
				only supports two heading levels for a reason, you animals. I honestly
				considered using a `before` pseudo-element to scream at you if you use
				an `h5` or `h6`.
			</p>
			<h3>We still need to think about stacked headings though.</h3>
			<h4>
				Let's make sure we don't screw that up with `h4` elements, either.
			</h4>
			<p>
				Phew, with any luck we have styled the headings above this text and they
				look pretty good.
			</p>
			<p>
				Let's add a closing paragraph here so things end with a decently sized
				block of text. I can't explain why I want things to end that way but I
				have to assume it's because I think things will look weird or unbalanced
				if there is a heading too close to the end of the document.
			</p>
			<p>
				What I've written here is probably long enough, but adding this final
				sentence can't hurt.
			</p>
		</>
	);
};

export const Light: Story<any> = () => (
	<div className="p-11">
		<div className="prose prose-light max-w-none">
			<h1>Light</h1>
			<CommonTemplate
				type={"light"}
				intro={
					<p className="lead">
						The "light" typography style is designed to be used on dark
						backgrounds.
					</p>
				}
			/>
		</div>
	</div>
);

export const Dark: Story<any> = () => (
	<div className="bg-white p-11">
		<div className="prose prose-dark max-w-none">
			<h1>Dark</h1>
			<CommonTemplate
				type={"dark"}
				intro={
					<p className="lead">
						The "dark" typography style is designed to be used on light
						backgrounds.
					</p>
				}
			/>
		</div>
	</div>
);
