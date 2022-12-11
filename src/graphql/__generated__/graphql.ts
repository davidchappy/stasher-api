import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../server';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStashable?: Maybe<Scalars['Boolean']>;
  deleteStashable?: Maybe<Scalars['Boolean']>;
  updateStashable?: Maybe<Scalars['Boolean']>;
};


export type MutationAddStashableArgs = {
  link: Scalars['String'];
};


export type MutationDeleteStashableArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateStashableArgs = {
  id: Scalars['Int'];
  link: Scalars['String'];
};

export type OgImage = {
  __typename?: 'OGImage';
  height?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type OgResult = {
  __typename?: 'OGResult';
  ogDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<OgImage>;
  ogTitle?: Maybe<Scalars['String']>;
  ogType?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  stashables?: Maybe<Array<Maybe<Stashable>>>;
};


export type QueryStashablesArgs = {
  filter?: InputMaybe<StashableFilter>;
};

export type Stashable = {
  __typename?: 'Stashable';
  id: Scalars['Int'];
  inserted_at?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  ogResult?: Maybe<OgResult>;
  updated_at?: Maybe<Scalars['String']>;
};

export type StashableFilter = {
  search?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  OGImage: ResolverTypeWrapper<OgImage>;
  OGResult: ResolverTypeWrapper<OgResult>;
  Query: ResolverTypeWrapper<{}>;
  Stashable: ResolverTypeWrapper<Stashable>;
  StashableFilter: StashableFilter;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Mutation: {};
  OGImage: OgImage;
  OGResult: OgResult;
  Query: {};
  Stashable: Stashable;
  StashableFilter: StashableFilter;
  String: Scalars['String'];
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addStashable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddStashableArgs, 'link'>>;
  deleteStashable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteStashableArgs, 'id'>>;
  updateStashable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationUpdateStashableArgs, 'id' | 'link'>>;
}>;

export type OgImageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OGImage'] = ResolversParentTypes['OGImage']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OgResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OGResult'] = ResolversParentTypes['OGResult']> = ResolversObject<{
  ogDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ogImage?: Resolver<Maybe<ResolversTypes['OGImage']>, ParentType, ContextType>;
  ogTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ogType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ogUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  stashables?: Resolver<Maybe<Array<Maybe<ResolversTypes['Stashable']>>>, ParentType, ContextType, Partial<QueryStashablesArgs>>;
}>;

export type StashableResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Stashable'] = ResolversParentTypes['Stashable']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inserted_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ogResult?: Resolver<Maybe<ResolversTypes['OGResult']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  OGImage?: OgImageResolvers<ContextType>;
  OGResult?: OgResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stashable?: StashableResolvers<ContextType>;
}>;

