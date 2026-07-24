import leavesVideo from "../../assets/videos/leaves.mp4";

function TopBar() {
  return (
    <div className="relative h-10 overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={leavesVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-green-900/45"></div>

      <div className="relative flex h-full items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-sm font-medium text-white">
          🌿 100% Natural Herbal Ingredients • Bulk Supply Across India • Premium Quality • Contact Ganapathy Naturals
        </div>
      </div>

    </div>
  );
}

export default TopBar;