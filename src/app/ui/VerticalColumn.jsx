import { DocumentIcon, CodeBracketIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "One File",
    description:
      "No more switching back and forth between multiple files - the styles you need are right there",
    href: "#",
    icon: DocumentIcon,
  },
  {
    name: "Readable Syntax",
    description:
      "Utility classes often have improved readability, making learning a breeze and future development faster",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Lengthy Class Names",
    description:
      "There is risk of 'polluting' your html/component code with more text that is unrelated to content or functionality",
    href: "#",
    icon: CodeBracketIcon,
  },
];

export default function VerticalColumn() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="mb-5 flex items-end text-lg font-semibold leading-7 text-gray-900 lg:text-3xl 2xl:text-5xl">
                <div className="mr-5 flex h-20 w-20 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-5xl">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
