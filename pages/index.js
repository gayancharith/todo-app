export default function Home() {
  return (
    <figure class="bg-gray-100 rounded-xl p-8">
      <img
        class="w-32 h-32 rounded-full mx-auto"
        src="https://picsum.photos/200/300"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg font-semibo">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>Sarah Dayan</div>
          <div>Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
}
