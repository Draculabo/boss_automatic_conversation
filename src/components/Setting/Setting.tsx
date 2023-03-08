import TextRegion from '../TextRegion/TextRegion';
function Setting() {
  return (
    <div className="boss-conversation-setting">
      设置
      <TextRegion type="target" />
      <TextRegion type="exclude" />
    </div>
  );
}

export default Setting;
