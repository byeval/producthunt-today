import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO-8601 encoded UTC date string. */
  DateTime: any
}

/** A collection of posts. */
export type Collection = TopicableInterface & {
  __typename?: 'Collection'
  /** Cover image for the collection. */
  coverImage?: Maybe<Scalars['String']>
  /** Identifies the date and time when collection was created. */
  createdAt: Scalars['DateTime']
  /** Description of the collection in plain text. */
  description?: Maybe<Scalars['String']>
  /** Identifies the date and time when collection was featured. */
  featuredAt?: Maybe<Scalars['DateTime']>
  /** Number of users following the collection. */
  followersCount: Scalars['Int']
  /** ID of the collection. */
  id: Scalars['ID']
  /** Whether the viewer is following the collection or not. */
  isFollowing: Scalars['Boolean']
  /** Name of the collection. */
  name: Scalars['String']
  /** Lookup posts which are part of the collection. */
  posts: PostConnection
  /** Tagline of the collection. */
  tagline: Scalars['String']
  /** Look up topics that are associated with the object. */
  topics: TopicConnection
  /** Public URL of the goal. */
  url: Scalars['String']
  /** User who created the collection. */
  user: User
  /** ID of User who created the collection. */
  userId: Scalars['ID']
}

/** A collection of posts. */
export type CollectionCoverImageArgs = {
  height?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

/** A collection of posts. */
export type CollectionPostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A collection of posts. */
export type CollectionTopicsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The connection type for Collection. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<CollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Collection
}

export enum CollectionsOrder {
  /** Returns Collections in descending order of featured date. */
  FeaturedAt = 'FEATURED_AT',
  /** Returns Collections in descending order of followers count. */
  FollowersCount = 'FOLLOWERS_COUNT',
  /** Returns Collections in descending order of creation date. */
  Newest = 'NEWEST',
}

/** A comment posted by a User. */
export type Comment = VotableInterface & {
  __typename?: 'Comment'
  /** Body of the comment. */
  body: Scalars['String']
  /** Identifies the date and time when comment was created. */
  createdAt: Scalars['DateTime']
  /** ID of the comment. */
  id: Scalars['ID']
  /** Whether the Viewer has voted for the object or not. */
  isVoted: Scalars['Boolean']
  /** Comment on which this comment was posted(null in case of top level comments). */
  parent?: Maybe<Comment>
  /** ID of Comment on which this comment was posted(null in case of top level comments). */
  parentId?: Maybe<Scalars['ID']>
  /** Lookup comments that were posted on the comment itself. */
  replies: CommentConnection
  /** Public URL of the comment. */
  url: Scalars['String']
  /** User who posted the comment. */
  user: User
  /** ID of User who posted the comment. */
  userId: Scalars['ID']
  votes: VoteConnection
  /** Number of votes that the object has currently. */
  votesCount: Scalars['Int']
}

/** A comment posted by a User. */
export type CommentRepliesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<CommentsOrder>
}

/** A comment posted by a User. */
export type CommentVotesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  createdAfter?: Maybe<Scalars['DateTime']>
  createdBefore?: Maybe<Scalars['DateTime']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The connection type for Comment. */
export type CommentConnection = {
  __typename?: 'CommentConnection'
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Comment
}

export enum CommentsOrder {
  /** Returns Comments in descending order of creation date. */
  Newest = 'NEWEST',
  /** Returns Comments in descending order of votes count. */
  VotesCount = 'VOTES_COUNT',
}

export type Error = {
  __typename?: 'Error'
  /** Field for which the error occurred. */
  field: Scalars['String']
  /** Error message. */
  message: Scalars['String']
}

/** A goal created by maker. */
export type Goal = {
  __typename?: 'Goal'
  /** Number of cheers on the Goal. */
  cheerCount: Scalars['Int']
  /** Identifies the date and time when goal was marked as completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** Identifies the date and time when goal was created. */
  createdAt: Scalars['DateTime']
  /** Whether the goal is user's current goal or not. */
  current: Scalars['Boolean']
  /** Identifies the date and time until the goal is user's current goal. */
  currentUntil?: Maybe<Scalars['DateTime']>
  /** Identifies the date and time when goal is due. */
  dueAt?: Maybe<Scalars['DateTime']>
  /** Total time spent in focus mode in seconds, starts at 0 */
  focusedDuration: Scalars['Int']
  /** Maker group to which the goal belongs to. */
  group: MakerGroup
  /** ID of Maker group to which the goal belongs to. */
  groupId: Scalars['ID']
  /** ID of the goal. */
  id: Scalars['ID']
  /** Whether the Viewer has cheered the goal or not. */
  isCheered: Scalars['Boolean']
  /** Maker project to which the goal belongs to. */
  project?: Maybe<MakerProject>
  /** ID of Maker project to which the goal belongs to. */
  projectId?: Maybe<Scalars['ID']>
  /** Title of the goal in plain text */
  title: Scalars['String']
  /** Public URL of the goal. */
  url: Scalars['String']
  /** User who created the goal. */
  user: User
  /** ID of User who created the goal. */
  userId: Scalars['ID']
}

/** Autogenerated input type of GoalCheer */
export type GoalCheerInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the Goal to cheer. */
  goalId: Scalars['ID']
}

/** Autogenerated return type of GoalCheer */
export type GoalCheerPayload = {
  __typename?: 'GoalCheerPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

/** Autogenerated input type of GoalCheerUndo */
export type GoalCheerUndoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the Goal to cheer. */
  goalId: Scalars['ID']
}

/** Autogenerated return type of GoalCheerUndo */
export type GoalCheerUndoPayload = {
  __typename?: 'GoalCheerUndoPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

/** The connection type for Goal. */
export type GoalConnection = {
  __typename?: 'GoalConnection'
  /** A list of edges. */
  edges: Array<GoalEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** Autogenerated input type of GoalCreate */
export type GoalCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** Set the date and time when the Goal is due in future. Pass null to make Goal never due. */
  dueAt?: Maybe<Scalars['DateTime']>
  /** ID of the MakerGroup(space) to set on the Goal. Viewer should be accepted member of the MakerGroup. */
  groupId?: Maybe<Scalars['ID']>
  /**
   * ID of the MakerProject to set on the Goal. Pass null to remove MakerProject
   * from Goal. MakerProject should be created by Viewer.
   */
  projectId?: Maybe<Scalars['ID']>
  /** Set the title of the Goal. Accepts a non empty string. Maximum length is 80 characters. */
  title: Scalars['String']
}

/** Autogenerated return type of GoalCreate */
export type GoalCreatePayload = {
  __typename?: 'GoalCreatePayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

/** An edge in a connection. */
export type GoalEdge = {
  __typename?: 'GoalEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Goal
}

/** Autogenerated input type of GoalMarkAsComplete */
export type GoalMarkAsCompleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the goal to mark complete. */
  goalId: Scalars['ID']
}

/** Autogenerated return type of GoalMarkAsComplete */
export type GoalMarkAsCompletePayload = {
  __typename?: 'GoalMarkAsCompletePayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

/** Autogenerated input type of GoalMarkAsIncomplete */
export type GoalMarkAsIncompleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the Goal to mark complete. */
  goalId: Scalars['ID']
}

/** Autogenerated return type of GoalMarkAsIncomplete */
export type GoalMarkAsIncompletePayload = {
  __typename?: 'GoalMarkAsIncompletePayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

/** Autogenerated input type of GoalUpdate */
export type GoalUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** Set the date and time when the Goal is due in future. Pass null to make the Goal never due. */
  dueAt?: Maybe<Scalars['DateTime']>
  /** ID of the Goal to update. */
  goalId: Scalars['ID']
  /** ID of the MakerGroup(space) to set on the Goal. Cannot be null. Viewer should be accepted member of the MakerGroup. */
  groupId?: Maybe<Scalars['ID']>
  /**
   * ID of the MakerProject to set on the Goal. Pass null to remove MakerProject
   * from Goal. MakerProject should be created by Viewer.
   */
  projectId?: Maybe<Scalars['ID']>
  /** Set the title of the Goal. Accepts a non empty string. Maximum length is 80 characters. */
  title?: Maybe<Scalars['String']>
}

/** Autogenerated return type of GoalUpdate */
export type GoalUpdatePayload = {
  __typename?: 'GoalUpdatePayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<Goal>
}

export enum GoalsOrder {
  /** Returns Goals in descending order of completion date. */
  CompletedAt = 'COMPLETED_AT',
  /** Returns Goals in ascending order of due date. */
  DueAt = 'DUE_AT',
  /** Returns Goals in descending order of creation date. */
  Newest = 'NEWEST',
}

/** A group of makers, also known as Spaces on PH. */
export type MakerGroup = {
  __typename?: 'MakerGroup'
  /** Description of the MakerGroup. */
  description: Scalars['String']
  /** Number of goals that have been created in the MakerGroup. */
  goalsCount: Scalars['Int']
  /** ID of the MakerGroup. */
  id: Scalars['ID']
  /** Whether Viewer is member of the MakerGroup or not. */
  isMember: Scalars['Boolean']
  /** Number of users who are part of the MakerGroup. */
  membersCount: Scalars['Int']
  /** Name of the MakerGroup. */
  name: Scalars['String']
  /** Tagline of the MakerGroup. */
  tagline: Scalars['String']
  /** URL of the MakerGroup. */
  url: Scalars['String']
}

/** The connection type for MakerGroup. */
export type MakerGroupConnection = {
  __typename?: 'MakerGroupConnection'
  /** A list of edges. */
  edges: Array<MakerGroupEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type MakerGroupEdge = {
  __typename?: 'MakerGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: MakerGroup
}

export enum MakerGroupsOrder {
  /** Returns MakerGroups in descending order of goals count. */
  GoalsCount = 'GOALS_COUNT',
  /** Returns MakerGroups in descending order of last active date. */
  LastActive = 'LAST_ACTIVE',
  /** Returns MakerGroups in descending order of members count. */
  MembersCount = 'MEMBERS_COUNT',
  /** Returns MakerGroups in descending order of creation date. */
  Newest = 'NEWEST',
}

/** A maker project. */
export type MakerProject = {
  __typename?: 'MakerProject'
  /** ID of the MakerProject. */
  id: Scalars['ID']
  /** Image of the MakerProject. */
  image?: Maybe<Scalars['String']>
  /** Whether the MakerProject owner is looking for other makers or not. */
  lookingForOtherMakers: Scalars['Boolean']
  /** ID of the MakerProject. */
  name: Scalars['String']
  /** Tagline of the MakerProject. */
  tagline: Scalars['String']
  /** URL of the MakerProject. */
  url: Scalars['String']
}

/** A maker project. */
export type MakerProjectImageArgs = {
  height?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

/** The connection type for MakerProject. */
export type MakerProjectConnection = {
  __typename?: 'MakerProjectConnection'
  /** A list of edges. */
  edges: Array<MakerProjectEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type MakerProjectEdge = {
  __typename?: 'MakerProjectEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: MakerProject
}

/** A media object. */
export type Media = {
  __typename?: 'Media'
  /** Type of media object. */
  type: Scalars['String']
  /** Public URL for the media object. Incase of videos this URL represents thumbnail generated from video. */
  url: Scalars['String']
  /** Video URL of the media object. */
  videoUrl?: Maybe<Scalars['String']>
}

/** A media object. */
export type MediaUrlArgs = {
  height?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Cheer a Goal as Viewer. Returns the cheered Goal */
  goalCheer: GoalCheerPayload
  /** Cheer a Goal as Viewer. Returns the cheered Goal */
  goalCheerUndo: GoalCheerUndoPayload
  /** Create a Goal for Viewer. Returns the created Goal. */
  goalCreate: GoalCreatePayload
  /** Marks a Goal as complete. Returns the updated Goal */
  goalMarkAsComplete: GoalMarkAsCompletePayload
  /** Marks a Goal as incomplete. Returns the updated Goal. */
  goalMarkAsIncomplete: GoalMarkAsIncompletePayload
  /** Update a Goal's `due_at`, `title`, `project` or `group` fields. Returns the updated Goal. */
  goalUpdate: GoalUpdatePayload
  /** Follow a User as Viewer. Returns the followed User. */
  userFollow: UserFollowPayload
  /** Stop following a User as Viewer. Returns the un-followed User. */
  userFollowUndo: UserFollowUndoPayload
}

export type MutationGoalCheerArgs = {
  input: GoalCheerInput
}

export type MutationGoalCheerUndoArgs = {
  input: GoalCheerUndoInput
}

export type MutationGoalCreateArgs = {
  input: GoalCreateInput
}

export type MutationGoalMarkAsCompleteArgs = {
  input: GoalMarkAsCompleteInput
}

export type MutationGoalMarkAsIncompleteArgs = {
  input: GoalMarkAsIncompleteInput
}

export type MutationGoalUpdateArgs = {
  input: GoalUpdateInput
}

export type MutationUserFollowArgs = {
  input: UserFollowInput
}

export type MutationUserFollowUndoArgs = {
  input: UserFollowUndoInput
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

/** A post. */
export type Post = TopicableInterface &
  VotableInterface & {
    __typename?: 'Post'
    /** Lookup collections which the Post is part of. */
    collections: CollectionConnection
    /** Lookup comments on the Post. */
    comments: CommentConnection
    /** Number of comments made on the Post. */
    commentsCount: Scalars['Int']
    /** Identifies the date and time when the Post was created. */
    createdAt: Scalars['DateTime']
    /** Description of the Post in plain text. */
    description?: Maybe<Scalars['String']>
    /** Identifies the date and time when the Post was featured. */
    featuredAt?: Maybe<Scalars['DateTime']>
    /** ID of the Post. */
    id: Scalars['ID']
    /** Whether the viewer has added the Post to one of their collections. */
    isCollected: Scalars['Boolean']
    /** Whether the Viewer has voted for the object or not. */
    isVoted: Scalars['Boolean']
    /** Users who are marked as makers of the Post. */
    makers: Array<User>
    /** Media items for the Post. */
    media: Array<Media>
    /** Name of the Post. */
    name: Scalars['String']
    /** Aggregate review rating for the Post. */
    reviewsRating: Scalars['Float']
    /** URL friendly slug of the Post. */
    slug: Scalars['String']
    /** Tagline of the Post. */
    tagline: Scalars['String']
    /** Thumbnail media object of the Post. */
    thumbnail?: Maybe<Media>
    /** Look up topics that are associated with the object. */
    topics: TopicConnection
    /** URL of the Post on Product Hunt. */
    url: Scalars['String']
    /** User who created the Post. */
    user: User
    /** ID of User who created the Post. */
    userId: Scalars['ID']
    votes: VoteConnection
    /** Number of votes that the object has currently. */
    votesCount: Scalars['Int']
    /** URL that redirects to the Post's website. */
    website: Scalars['String']
  }

/** A post. */
export type PostCollectionsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A post. */
export type PostCommentsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<CommentsOrder>
}

/** A post. */
export type PostTopicsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A post. */
export type PostVotesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  createdAfter?: Maybe<Scalars['DateTime']>
  createdBefore?: Maybe<Scalars['DateTime']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The connection type for Post. */
export type PostConnection = {
  __typename?: 'PostConnection'
  /** A list of edges. */
  edges: Array<PostEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type PostEdge = {
  __typename?: 'PostEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Post
}

export enum PostsOrder {
  /** Returns Posts in descending order of featured date. */
  FeaturedAt = 'FEATURED_AT',
  /** Returns Posts in descending order of creation date. */
  Newest = 'NEWEST',
  /** Returns Posts in descending order of ranking. */
  Ranking = 'RANKING',
  /** Returns Posts in descending order of votes count. */
  Votes = 'VOTES',
}

/** The query root for Product Hunt API V2 schema */
export type Query = {
  __typename?: 'Query'
  /** Look up a Collection(only published). */
  collection?: Maybe<Collection>
  /** Look up Collections by various parameters. */
  collections: CollectionConnection
  /** Look up a Comment. */
  comment?: Maybe<Comment>
  /** Look up a Goal. */
  goal?: Maybe<Goal>
  /** Look up Goals by various parameters. */
  goals: GoalConnection
  /** Look up a MakerGroup. */
  makerGroup?: Maybe<MakerGroup>
  /** Look up MakerGroups by various parameters. */
  makerGroups: MakerGroupConnection
  /** Look up a Post. */
  post?: Maybe<Post>
  /** Look up Posts by various parameters. */
  posts: PostConnection
  /** Look up a Topic. */
  topic?: Maybe<Topic>
  /** Look up Topics by various parameters. */
  topics: TopicConnection
  /** Look up a User. */
  user?: Maybe<User>
  /** Top level scope for currently authenticated user. Includes `goals`, `makerGroups`, `makerProjects` & `user` fields. */
  viewer?: Maybe<Viewer>
}

/** The query root for Product Hunt API V2 schema */
export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryCollectionsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<CollectionsOrder>
  postId?: Maybe<Scalars['ID']>
  userId?: Maybe<Scalars['ID']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryCommentArgs = {
  id: Scalars['ID']
}

/** The query root for Product Hunt API V2 schema */
export type QueryGoalArgs = {
  id: Scalars['ID']
}

/** The query root for Product Hunt API V2 schema */
export type QueryGoalsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  completed?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  makerGroupId?: Maybe<Scalars['ID']>
  makerProjectId?: Maybe<Scalars['ID']>
  order?: Maybe<GoalsOrder>
  userId?: Maybe<Scalars['ID']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryMakerGroupArgs = {
  id: Scalars['ID']
}

/** The query root for Product Hunt API V2 schema */
export type QueryMakerGroupsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<MakerGroupsOrder>
  userId?: Maybe<Scalars['ID']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryPostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<PostsOrder>
  postedAfter?: Maybe<Scalars['DateTime']>
  postedBefore?: Maybe<Scalars['DateTime']>
  topic?: Maybe<Scalars['String']>
  twitterUrl?: Maybe<Scalars['String']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryTopicArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryTopicsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  followedByUserId?: Maybe<Scalars['ID']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<TopicsOrder>
  query?: Maybe<Scalars['String']>
}

/** The query root for Product Hunt API V2 schema */
export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
  username?: Maybe<Scalars['String']>
}

/** A topic. */
export type Topic = {
  __typename?: 'Topic'
  /** Identifies the date and time when topic was created. */
  createdAt: Scalars['DateTime']
  /** Description of the topic. */
  description: Scalars['String']
  /** Number of users who are following the topic. */
  followersCount: Scalars['Int']
  /** ID of the topic. */
  id: Scalars['ID']
  /** Image of the topic. */
  image?: Maybe<Scalars['String']>
  /** Whether the viewer is following the topic or not. */
  isFollowing: Scalars['Boolean']
  /** Name of the topic. */
  name: Scalars['String']
  /** Number of posts that are part of the topic. */
  postsCount: Scalars['Int']
  /** URL friendly slug of the topic. */
  slug: Scalars['String']
  /** Public URL of the topic. */
  url: Scalars['String']
}

/** A topic. */
export type TopicImageArgs = {
  height?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

/** The connection type for Topic. */
export type TopicConnection = {
  __typename?: 'TopicConnection'
  /** A list of edges. */
  edges: Array<TopicEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type TopicEdge = {
  __typename?: 'TopicEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Topic
}

/** An object that can have topics associated with it. */
export type TopicableInterface = {
  /** ID of the object. */
  id: Scalars['ID']
  /** Look up topics that are associated with the object. */
  topics: TopicConnection
}

/** An object that can have topics associated with it. */
export type TopicableInterfaceTopicsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export enum TopicsOrder {
  /** Returns Topics in descending order of followers count. */
  FollowersCount = 'FOLLOWERS_COUNT',
  /** Returns Topics in descending order of creation date. */
  Newest = 'NEWEST',
}

/** A user. */
export type User = {
  __typename?: 'User'
  /** Cover image of the user. */
  coverImage?: Maybe<Scalars['String']>
  /** Identifies the date and time when user was created. */
  createdAt: Scalars['DateTime']
  /** Look up collections that the user is following. */
  followedCollections: CollectionConnection
  /** Look up other users who are following the user. */
  followers: UserConnection
  /** Look up other users who are being followed by the user. */
  following: UserConnection
  /** Headline text of the user. */
  headline?: Maybe<Scalars['String']>
  /** ID of the user. */
  id: Scalars['ID']
  /** Whether the viewer is following the user or not. */
  isFollowing: Scalars['Boolean']
  /** Whether the user is an accepted maker or not. */
  isMaker: Scalars['Boolean']
  /** Whether the user is same as the viewer of the API. */
  isViewer: Scalars['Boolean']
  /** Look up posts that the user has made. */
  madePosts: PostConnection
  /** Name of the user. */
  name: Scalars['String']
  /** Profile image of the user. */
  profileImage?: Maybe<Scalars['String']>
  /** Look up posts that the user has submitted. */
  submittedPosts: PostConnection
  /** Twitter username of the user. */
  twitterUsername?: Maybe<Scalars['String']>
  /** Public URL of the user's profile */
  url: Scalars['String']
  /** Username of the user. */
  username: Scalars['String']
  /** Look up posts that the user has voted for. */
  votedPosts: PostConnection
  /** URL for the user's website */
  websiteUrl?: Maybe<Scalars['String']>
}

/** A user. */
export type UserCoverImageArgs = {
  height?: Maybe<Scalars['Int']>
  width?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserFollowedCollectionsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserFollowersArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserFollowingArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserMadePostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserProfileImageArgs = {
  size?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserSubmittedPostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A user. */
export type UserVotedPostsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection'
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** Autogenerated input type of UserFollow */
export type UserFollowInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the User to follow. */
  userId: Scalars['ID']
}

/** Autogenerated return type of UserFollow */
export type UserFollowPayload = {
  __typename?: 'UserFollowPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<User>
}

/** Autogenerated input type of UserFollowUndo */
export type UserFollowUndoInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the User to stop following. */
  userId: Scalars['ID']
}

/** Autogenerated return type of UserFollowUndo */
export type UserFollowUndoPayload = {
  __typename?: 'UserFollowUndoPayload'
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>
  errors: Array<Error>
  node?: Maybe<User>
}

/** Top level scope for the user in whose context the API is running. */
export type Viewer = {
  __typename?: 'Viewer'
  /** Look up goals of the viewer. */
  goals: GoalConnection
  /** Look up maker groups the viewer is accepted member of. */
  makerGroups: MakerGroupConnection
  /** Look up maker projects the viewer is a maintainer(either created or maintained by) of. */
  makerProjects: MakerProjectConnection
  /** User who is the viewer of the API. */
  user: User
}

/** Top level scope for the user in whose context the API is running. */
export type ViewerGoalsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['Boolean']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<GoalsOrder>
}

/** Top level scope for the user in whose context the API is running. */
export type ViewerMakerGroupsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  order?: Maybe<MakerGroupsOrder>
}

/** Top level scope for the user in whose context the API is running. */
export type ViewerMakerProjectsArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** An object which users can vote for. */
export type VotableInterface = {
  /** ID of the object */
  id: Scalars['ID']
  /** Whether the Viewer has voted for the object or not. */
  isVoted: Scalars['Boolean']
  votes: VoteConnection
  /** Number of votes that the object has currently. */
  votesCount: Scalars['Int']
}

/** An object which users can vote for. */
export type VotableInterfaceVotesArgs = {
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  createdAfter?: Maybe<Scalars['DateTime']>
  createdBefore?: Maybe<Scalars['DateTime']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A vote. */
export type Vote = {
  __typename?: 'Vote'
  /** Identifies the date and time when Vote was created. */
  createdAt: Scalars['DateTime']
  /** ID of the Vote. */
  id: Scalars['ID']
  /** User who created the Vote. */
  user: User
  /** ID of User who created the Vote. */
  userId: Scalars['ID']
}

/** The connection type for Vote. */
export type VoteConnection = {
  __typename?: 'VoteConnection'
  /** A list of edges. */
  edges: Array<VoteEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Total number of objects returned from this query */
  totalCount: Scalars['Int']
}

/** An edge in a connection. */
export type VoteEdge = {
  __typename?: 'VoteEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Vote
}

export type UserPartFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'profileImage'
>

export type PostPartsFragment = { __typename?: 'Post' } & Pick<
  Post,
  | 'id'
  | 'name'
  | 'tagline'
  | 'description'
  | 'slug'
  | 'url'
  | 'website'
  | 'isVoted'
  | 'votesCount'
  | 'commentsCount'
  | 'featuredAt'
  | 'createdAt'
> & {
    user: { __typename?: 'User' } & UserPartFragment
    thumbnail?: Maybe<{ __typename?: 'Media' } & Pick<Media, 'url'>>
    media: Array<{ __typename?: 'Media' } & Pick<Media, 'type' | 'url'>>
  }

export type GetPostsQueryVariables = {
  after?: Maybe<Scalars['String']>
  featured?: Maybe<Scalars['Boolean']>
  postedBefore?: Maybe<Scalars['DateTime']>
  postedAfter?: Maybe<Scalars['DateTime']>
}

export type GetPostsQuery = { __typename?: 'Query' } & {
  posts: { __typename?: 'PostConnection' } & {
    edges: Array<
      { __typename?: 'PostEdge' } & Pick<PostEdge, 'cursor'> & {
          node: { __typename?: 'Post' } & PostPartsFragment
        }
    >
    pageInfo: { __typename?: 'PageInfo' } & Pick<
      PageInfo,
      'endCursor' | 'hasNextPage'
    >
  }
}

export type GetPostQueryVariables = {
  id?: Maybe<Scalars['ID']>
}

export type GetPostQuery = { __typename?: 'Query' } & {
  post?: Maybe<
    { __typename?: 'Post' } & {
      makers: Array<{ __typename?: 'User' } & UserPartFragment>
      comments: { __typename?: 'CommentConnection' } & {
        edges: Array<
          { __typename?: 'CommentEdge' } & {
            node: { __typename?: 'Comment' } & Pick<
              Comment,
              'id' | 'userId' | 'createdAt' | 'body'
            > & { user: { __typename?: 'User' } & UserPartFragment }
          }
        >
      }
    } & PostPartsFragment
  >
}

export type GetUserQueryVariables = {
  id: Scalars['ID']
  username: Scalars['String']
}

export type GetUserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'id'
      | 'name'
      | 'username'
      | 'coverImage'
      | 'profileImage'
      | 'headline'
      | 'isFollowing'
      | 'isMaker'
    > & {
        votedPosts: { __typename?: 'PostConnection' } & {
          edges: Array<
            { __typename?: 'PostEdge' } & {
              node: { __typename?: 'Post' } & PostPartsFragment
            }
          >
        }
      }
  >
}

export const UserPartFragmentDoc = gql`
  fragment UserPart on User {
    id
    name
    profileImage
  }
`
export const PostPartsFragmentDoc = gql`
  fragment PostParts on Post {
    id
    name
    tagline
    description
    slug
    url
    website
    isVoted
    votesCount
    commentsCount
    featuredAt
    createdAt
    user {
      ...UserPart
    }
    thumbnail {
      url
    }
    media {
      type
      url
    }
  }
  ${UserPartFragmentDoc}
`
export const GetPostsDocument = gql`
  query getPosts(
    $after: String = null
    $featured: Boolean = true
    $postedBefore: DateTime = null
    $postedAfter: DateTime = null
  ) {
    posts(
      after: $after
      featured: $featured
      postedBefore: $postedBefore
      postedAfter: $postedAfter
    ) {
      edges {
        node {
          ...PostParts
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${PostPartsFragmentDoc}
`

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      featured: // value for 'featured'
 *      postedBefore: // value for 'postedBefore'
 *      postedAfter: // value for 'postedAfter'
 *   },
 * });
 */
export function useGetPostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  )
}
export function useGetPostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostsQuery,
    GetPostsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(
    GetPostsDocument,
    baseOptions
  )
}
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>
export type GetPostsLazyQueryHookResult = ReturnType<
  typeof useGetPostsLazyQuery
>
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<
  GetPostsQuery,
  GetPostsQueryVariables
>
export const GetPostDocument = gql`
  query getPost($id: ID) {
    post(id: $id) {
      ...PostParts
      makers {
        ...UserPart
      }
      comments(first: 1, order: VOTES_COUNT) {
        edges {
          node {
            id
            userId
            createdAt
            body
            user {
              ...UserPart
            }
          }
        }
      }
    }
  }
  ${PostPartsFragmentDoc}
  ${UserPartFragmentDoc}
`

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  )
}
export function useGetPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPostQuery,
    GetPostQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    baseOptions
  )
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>
export type GetPostQueryResult = ApolloReactCommon.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>
export const GetUserDocument = gql`
  query getUser($id: ID!, $username: String!) {
    user(id: $id, username: $username) {
      id
      name
      username
      coverImage
      profileImage
      headline
      isFollowing
      isMaker
      votedPosts(first: 1000) {
        edges {
          node {
            ...PostParts
          }
        }
      }
    }
  }
  ${PostPartsFragmentDoc}
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  )
}
export function useGetUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserQueryResult = ApolloReactCommon.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
