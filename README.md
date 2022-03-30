# Prerequisites 

Follow installation documentation for your OS https://jekyllrb.com/docs/installation/

You need to have ruby and gem installed.

```
ruby -v
```

```
gem -v
```

```
git clone git@github.com:makeaweb/maw.git
```

```
bundle install
```

```
gem update
```

```
bundle update --bundler
bundle add webrick
bundle install --redownload
```

## Generate and start developing

```
jekyll serve --watch
```

## Build the website for production

```
jekyll build
```

### Notes

Created using Jekyll and Bootstrap 4

Might have some issues on Apple machines running M1 CPU's on ARM arch. This article followed https://utpalkumar.medium.com/how-to-install-jekyll-on-apple-m1-macbook-c87894b7fc70 will solve your issues.

### References and documentation

<a target="_blank" href="https://forestry.io/blog/how-i-reduced-my-jekyll-build-time-by-61/">https://forestry.io/blog/how-i-reduced-my-jekyll-build-time-by-61</a><br>
<a target="_blank" href="https://shopify.github.io/liquid/">https://shopify.github.io/liquid</a><br>

### About the project

Using github pages: https://makeaweb.com.au