### create.expo.app
<pre>
npx create-expo-app@latest
</pre>
### expo.start
<pre>
npx expo start
</pre>
### eas.build before
<pre>
https://expo.dev/accounts/ec97d4fa3d484a5aaa8a60fbfc94fb/projects/ on to create project with slug name like package
eas init --id {}
</pre>
### eas.build
<pre>
android: npx cross-env EAS_NO_VCS=1 eas build --platform android
</pre>
### android.run[expo]
<pre>
URI: https://expo.dev/accounts/ec97d4fa3d484a5aaa8a60fbfc94fb/projects/{project name}/builds
download and build: npx expo run:android --variant release
</pre>
### publish to play store
<pre>
npm install -g eas-cli
eas login
</pre>
### tablet: 7inch and 10inch
<pre>
7inch: 17.78cm. a^2 * b^2 = 17.78(cm). 17.78 / b^2 = a^2
</pre>
### png filter 1(sub)
Sub(x) = Raw(x) - Raw(x-bpp)

### png filter 2(up)
Up(x) = Raw(x) - Prior(x)
let 
buf = [10, 100, 200]
up = [] // to buf: up(x) + prior 
raw
prior
for 
(
  let i = 0;
  i < 256;
  i++
)
{
  if
  (
    i == 0
  )
  {
    prior = 0 
  }
  raw = buf[i]
  up[i] = raw - prior
}