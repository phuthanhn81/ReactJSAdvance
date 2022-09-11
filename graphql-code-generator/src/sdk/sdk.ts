import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "dbo.Product" */
export type DboProduct = {
  __typename?: 'dbo_Product';
  ID: Scalars['Int'];
  Name: Maybe<Scalars['String']>;
  Price: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "dbo.Product" */
export type DboProductAggregate = {
  __typename?: 'dbo_Product_aggregate';
  aggregate: Maybe<DboProductAggregateFields>;
  nodes: Array<DboProduct>;
};

/** aggregate fields of "dbo.Product" */
export type DboProductAggregateFields = {
  __typename?: 'dbo_Product_aggregate_fields';
  avg: Maybe<DboProductAvgFields>;
  count: Scalars['Int'];
  max: Maybe<DboProductMaxFields>;
  min: Maybe<DboProductMinFields>;
  stddev: Maybe<DboProductStddevFields>;
  stddev_pop: Maybe<DboProductStddevPopFields>;
  stddev_samp: Maybe<DboProductStddevSampFields>;
  sum: Maybe<DboProductSumFields>;
  var_pop: Maybe<DboProductVarPopFields>;
  var_samp: Maybe<DboProductVarSampFields>;
  variance: Maybe<DboProductVarianceFields>;
};


/** aggregate fields of "dbo.Product" */
export type DboProductAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<DboProductSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type DboProductAvgFields = {
  __typename?: 'dbo_Product_avg_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "dbo.Product". All fields are combined with a logical 'AND'. */
export type DboProductBoolExp = {
  ID?: InputMaybe<IntComparisonExp>;
  Name?: InputMaybe<StringComparisonExp>;
  Price?: InputMaybe<NumericComparisonExp>;
  _and?: InputMaybe<Array<DboProductBoolExp>>;
  _not?: InputMaybe<DboProductBoolExp>;
  _or?: InputMaybe<Array<DboProductBoolExp>>;
};

/** unique or primary key constraints on table "dbo.Product" */
export enum DboProductConstraint {
  /** unique or primary key constraint */
  ProductPkey = 'Product_pkey'
}

/** input type for incrementing numeric columns in table "dbo.Product" */
export type DboProductIncInput = {
  ID?: InputMaybe<Scalars['Int']>;
  Price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "dbo.Product" */
export type DboProductInsertInput = {
  ID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type DboProductMaxFields = {
  __typename?: 'dbo_Product_max_fields';
  ID: Maybe<Scalars['Int']>;
  Name: Maybe<Scalars['String']>;
  Price: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type DboProductMinFields = {
  __typename?: 'dbo_Product_min_fields';
  ID: Maybe<Scalars['Int']>;
  Name: Maybe<Scalars['String']>;
  Price: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "dbo.Product" */
export type DboProductMutationResponse = {
  __typename?: 'dbo_Product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DboProduct>;
};

/** on_conflict condition type for table "dbo.Product" */
export type DboProductOnConflict = {
  constraint: DboProductConstraint;
  update_columns?: Array<DboProductUpdateColumn>;
  where?: InputMaybe<DboProductBoolExp>;
};

/** Ordering options when selecting data from "dbo.Product". */
export type DboProductOrderBy = {
  ID?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Price?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: dbo_Product */
export type DboProductPkColumnsInput = {
  ID: Scalars['Int'];
};

/** select columns of table "dbo.Product" */
export enum DboProductSelectColumn {
  /** column name */
  Id = 'ID',
  /** column name */
  Name = 'Name',
  /** column name */
  Price = 'Price'
}

/** input type for updating data in table "dbo.Product" */
export type DboProductSetInput = {
  ID?: InputMaybe<Scalars['Int']>;
  Name?: InputMaybe<Scalars['String']>;
  Price?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type DboProductStddevFields = {
  __typename?: 'dbo_Product_stddev_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type DboProductStddevPopFields = {
  __typename?: 'dbo_Product_stddev_pop_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type DboProductStddevSampFields = {
  __typename?: 'dbo_Product_stddev_samp_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type DboProductSumFields = {
  __typename?: 'dbo_Product_sum_fields';
  ID: Maybe<Scalars['Int']>;
  Price: Maybe<Scalars['numeric']>;
};

/** update columns of table "dbo.Product" */
export enum DboProductUpdateColumn {
  /** column name */
  Id = 'ID',
  /** column name */
  Name = 'Name',
  /** column name */
  Price = 'Price'
}

/** aggregate var_pop on columns */
export type DboProductVarPopFields = {
  __typename?: 'dbo_Product_var_pop_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type DboProductVarSampFields = {
  __typename?: 'dbo_Product_var_samp_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type DboProductVarianceFields = {
  __typename?: 'dbo_Product_variance_fields';
  ID: Maybe<Scalars['Float']>;
  Price: Maybe<Scalars['Float']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "dbo.Product" */
  delete_dbo_Product: Maybe<DboProductMutationResponse>;
  /** delete single row from the table: "dbo.Product" */
  delete_dbo_Product_by_pk: Maybe<DboProduct>;
  /** insert data into the table: "dbo.Product" */
  insert_dbo_Product: Maybe<DboProductMutationResponse>;
  /** insert a single row into the table: "dbo.Product" */
  insert_dbo_Product_one: Maybe<DboProduct>;
  /** update data of the table: "dbo.Product" */
  update_dbo_Product: Maybe<DboProductMutationResponse>;
  /** update single row of the table: "dbo.Product" */
  update_dbo_Product_by_pk: Maybe<DboProduct>;
};


/** mutation root */
export type MutationRootDeleteDboProductArgs = {
  where: DboProductBoolExp;
};


/** mutation root */
export type MutationRootDeleteDboProductByPkArgs = {
  ID: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertDboProductArgs = {
  objects: Array<DboProductInsertInput>;
  on_conflict: InputMaybe<DboProductOnConflict>;
};


/** mutation root */
export type MutationRootInsertDboProductOneArgs = {
  object: DboProductInsertInput;
  on_conflict: InputMaybe<DboProductOnConflict>;
};


/** mutation root */
export type MutationRootUpdateDboProductArgs = {
  _inc: InputMaybe<DboProductIncInput>;
  _set: InputMaybe<DboProductSetInput>;
  where: DboProductBoolExp;
};


/** mutation root */
export type MutationRootUpdateDboProductByPkArgs = {
  _inc: InputMaybe<DboProductIncInput>;
  _set: InputMaybe<DboProductSetInput>;
  pk_columns: DboProductPkColumnsInput;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "dbo.Product" */
  dbo_Product: Array<DboProduct>;
  /** fetch aggregated fields from the table: "dbo.Product" */
  dbo_Product_aggregate: DboProductAggregate;
  /** fetch data from the table: "dbo.Product" using primary key columns */
  dbo_Product_by_pk: Maybe<DboProduct>;
};


export type QueryRootDboProductArgs = {
  distinct_on: InputMaybe<Array<DboProductSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<DboProductOrderBy>>;
  where: InputMaybe<DboProductBoolExp>;
};


export type QueryRootDboProductAggregateArgs = {
  distinct_on: InputMaybe<Array<DboProductSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<DboProductOrderBy>>;
  where: InputMaybe<DboProductBoolExp>;
};


export type QueryRootDboProductByPkArgs = {
  ID: Scalars['Int'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "dbo.Product" */
  dbo_Product: Array<DboProduct>;
  /** fetch aggregated fields from the table: "dbo.Product" */
  dbo_Product_aggregate: DboProductAggregate;
  /** fetch data from the table: "dbo.Product" using primary key columns */
  dbo_Product_by_pk: Maybe<DboProduct>;
};


export type SubscriptionRootDboProductArgs = {
  distinct_on: InputMaybe<Array<DboProductSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<DboProductOrderBy>>;
  where: InputMaybe<DboProductBoolExp>;
};


export type SubscriptionRootDboProductAggregateArgs = {
  distinct_on: InputMaybe<Array<DboProductSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<DboProductOrderBy>>;
  where: InputMaybe<DboProductBoolExp>;
};


export type SubscriptionRootDboProductByPkArgs = {
  ID: Scalars['Int'];
};

export type GetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductQuery = { __typename?: 'query_root', dbo_Product: Array<{ __typename?: 'dbo_Product', ID: number, Name: string | null, Price: number | null }> };

export type GetListProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListProductQuery = { __typename?: 'query_root', dbo_Product: Array<{ __typename?: 'dbo_Product', ID: number, Name: string | null, Price: number | null }> };

export type InsertProductMutationVariables = Exact<{
  data: DboProductInsertInput;
}>;


export type InsertProductMutation = { __typename?: 'mutation_root', insert_dbo_Product: { __typename?: 'dbo_Product_mutation_response', returning: Array<{ __typename?: 'dbo_Product', ID: number }> } | null };


export const GetProductDocument = gql`
    query GetProduct($id: Int!) {
  dbo_Product(where: {ID: {_eq: $id}}) {
    ID
    Name
    Price
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetListProductDocument = gql`
    query GetListProduct {
  dbo_Product {
    ID
    Name
    Price
  }
}
    `;

/**
 * __useGetListProductQuery__
 *
 * To run a query within a React component, call `useGetListProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListProductQuery(baseOptions?: Apollo.QueryHookOptions<GetListProductQuery, GetListProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListProductQuery, GetListProductQueryVariables>(GetListProductDocument, options);
      }
export function useGetListProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListProductQuery, GetListProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListProductQuery, GetListProductQueryVariables>(GetListProductDocument, options);
        }
export type GetListProductQueryHookResult = ReturnType<typeof useGetListProductQuery>;
export type GetListProductLazyQueryHookResult = ReturnType<typeof useGetListProductLazyQuery>;
export type GetListProductQueryResult = Apollo.QueryResult<GetListProductQuery, GetListProductQueryVariables>;
export const InsertProductDocument = gql`
    mutation InsertProduct($data: dbo_Product_insert_input!) {
  insert_dbo_Product(objects: [$data]) {
    returning {
      ID
    }
  }
}
    `;
export type InsertProductMutationFn = Apollo.MutationFunction<InsertProductMutation, InsertProductMutationVariables>;

/**
 * __useInsertProductMutation__
 *
 * To run a mutation, you first call `useInsertProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductMutation, { data, loading, error }] = useInsertProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertProductMutation(baseOptions?: Apollo.MutationHookOptions<InsertProductMutation, InsertProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertProductMutation, InsertProductMutationVariables>(InsertProductDocument, options);
      }
export type InsertProductMutationHookResult = ReturnType<typeof useInsertProductMutation>;
export type InsertProductMutationResult = Apollo.MutationResult<InsertProductMutation>;
export type InsertProductMutationOptions = Apollo.BaseMutationOptions<InsertProductMutation, InsertProductMutationVariables>;