import {
  QueryHookOptions,
  LazyQueryHookOptions,
  MutationHookOptions,
  OperationVariables,
  QueryResult,
  QueryTuple,
  MutationTuple,
} from "@apollo/client";

import { createContext, useContext, useMemo } from "react";

// #region interface
interface IQueryHookOptions<TData, TVariables>
  extends QueryHookOptions<TData, TVariables> {}

interface ILazyQueryHookOptions<TData, TVariables>
  extends LazyQueryHookOptions<TData, TVariables> {}

interface IMutationHookOptions<TData, TVariables>
  extends MutationHookOptions<TData, TVariables> {}
// #endregion

// #region function
declare function useSdkQuery<TData, TVariables = OperationVariables>(
  sdkFn: (
    baseOptions: QueryHookOptions<TData, TVariables>
  ) => QueryResult<TData, TVariables>,
  options?: IQueryHookOptions<TData, TVariables>
): QueryResult<TData, TVariables>;

declare function useSdkLazyQuery<TData, TVariables = OperationVariables>(
  sdkFn: (
    baseOptions: LazyQueryHookOptions<TData, TVariables>
  ) => QueryTuple<TData, TVariables>,
  options?: ILazyQueryHookOptions<TData, TVariables>
): QueryTuple<TData, TVariables>;

declare function useSdkMutation<TData, TVariables = OperationVariables>(
  sdkFn: (
    baseOptions: MutationHookOptions<TData, TVariables>
  ) => MutationTuple<TData, TVariables>,
  options?: IMutationHookOptions<TData, TVariables>
): MutationTuple<TData, TVariables>;
//#endregion

interface IAuth {
  useSdkQuery: typeof useSdkQuery;
  useSdkLazyQuery: typeof useSdkLazyQuery;
  useSdkMutation: typeof useSdkMutation;
}

type Props = Record<string, unknown> & { children: React.ReactNode };

const AuthContext = createContext<IAuth>({
  useSdkQuery: (Q) => Q({}),
  useSdkLazyQuery: (LQ) => LQ({}),
  useSdkMutation: (M) => M({}),
});

function AuthProvider({ children }: Props) {
  // #region hooks
  const useSdkQuery = function useSdkQuery<
    TData,
    TVariables = OperationVariables
  >(
    sdkFn: (
      baseOptions: QueryHookOptions<TData, TVariables>
    ) => QueryResult<TData, TVariables>,
    options?: IQueryHookOptions<TData, TVariables>
  ): QueryResult<TData, TVariables> {
    return sdkFn({
      ...options,
    });
  };

  const useSdkLazyQuery = function useSdkLazyQuery<
    TData,
    TVariables = OperationVariables
  >(
    sdkFn: (
      baseOptions: LazyQueryHookOptions<TData, TVariables>
    ) => QueryTuple<TData, TVariables>,
    options?: ILazyQueryHookOptions<TData, TVariables>
  ): QueryTuple<TData, TVariables> {
    return sdkFn({
      ...options,
    });
  };

  const useSdkMutation = function useSdkMutation<
    TData,
    TVariables = OperationVariables
  >(
    sdkFn: (
      baseOptions: MutationHookOptions<TData, TVariables>
    ) => MutationTuple<TData, TVariables>,
    options?: IMutationHookOptions<TData, TVariables>
  ): MutationTuple<TData, TVariables> {
    return sdkFn({
      ...options,
    });
  };
  //#endregion

  const value = useMemo(
    () => ({
      useSdkQuery,
      useSdkLazyQuery,
      useSdkMutation,
    }),
    [useSdkQuery, useSdkLazyQuery, useSdkMutation]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
