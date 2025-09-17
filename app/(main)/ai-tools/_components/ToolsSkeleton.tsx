// export function AIToolCardSkeleton() {
//   return (
//     <div className="max-w-[280px] flex-none animate-pulse rounded-2xl shadow transition-all duration-300 ease-in-out">
//       {/* Skeleton border */}
//       <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
//         <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
//           {/* Icon placeholder */}
//           <div className="h-28 w-28 rounded-full bg-gray-300 lg:h-32 lg:w-32" />

//           {/* Info placeholder */}
//           <div className="flex h-full w-full flex-col justify-between space-y-2">
//             {/* Name + verified */}
//             <div className="flex items-center justify-between">
//               <div className="flex max-w-[180px] items-center space-x-2">
//                 <div className="h-5 w-36 rounded bg-gray-300" />
//                 <div className="h-5 w-5 rounded-full bg-gray-300" />
//               </div>
//               <div className="h-5 w-5 rounded bg-gray-300" /> {/* Bookmark */}
//             </div>

//             {/* Summary placeholder */}
//             <div className="mt-4 space-y-2">
//               <div className="h-3 w-full rounded bg-gray-300" />
//               <div className="h-3 w-5/6 rounded bg-gray-300" />
//             </div>

//             {/* Rating + premium */}
//             <div className="flex w-full items-center justify-between">
//               <div className="flex items-center space-x-1">
//                 <div className="h-4 w-4 rounded bg-gray-300" />
//                 <div className="h-4 w-6 rounded bg-gray-300" />
//                 <div className="h-4 w-8 rounded bg-gray-300" />
//               </div>
//               <div className="h-4 w-12 rounded bg-gray-300" /> {/* Premium badge */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { BadgeCheck, Bookmark, Star } from "lucide-react";

export function AIToolCardSkeleton() {
  return (
    <div className="w-[280px] flex-none animate-pulse rounded-2xl shadow transition-all duration-300 ease-in-out">
      {/* Skeleton border */}
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          {/* Icon placeholder */}
          <div className="h-28 w-28 rounded-full bg-gray-300 lg:h-32 lg:w-32" />

          {/* Info placeholder */}
          <div className="flex h-full w-full flex-col justify-between space-y-2">
            {/* Name + verified */}
            <div className="flex w-full items-center justify-between">
              <div className="flex max-w-[180px] items-center space-x-2">
                <div className="h-5 w-36 rounded bg-gray-300" />
                <BadgeCheck className="h-5 w-5 text-gray-400" /> {/* Skeleton icon */}
              </div>
              <Bookmark className="h-5 w-5 text-gray-400" /> {/* Skeleton icon */}
            </div>

            {/* Summary placeholder */}
            <div className="mt-4 w-full space-y-2">
              <div className="h-3 w-full rounded bg-gray-300" />
              <div className="h-3 w-5/6 rounded bg-gray-300" />
            </div>

            {/* Rating + premium */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-gray-400" />
                <div className="h-4 w-6 rounded bg-gray-300" />
                <div className="h-4 w-8 rounded bg-gray-300" />
              </div>
              <div className="h-4 w-12 rounded bg-gray-300" /> {/* Premium badge */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
