import PageSpinner from "@/component/appui/PageSpinner";
import TaskNotifier from "@/component/features/Task/TaskNotifier";
import GlobalProvider from "@/context/Provider";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
      <GlobalProvider>
         <PageSpinner />
         <TaskNotifier />
          <div>{children}</div>
       </GlobalProvider>
    )
  }