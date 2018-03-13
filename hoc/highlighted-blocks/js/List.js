'use strict';

function Popular(Component) {
  return class Popular extends React.Component {
    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
}

function New(Component) {
  return class New extends React.Component {

    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
}

const
  PopularVideo = Popular(Video),
  NewVideo = New(Video),
  PopularArticle = Popular(Article),
  NewArticle = New(Article);

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        const VideoComponent = item.views >= 1000 ? PopularVideo : NewVideo;
        return (
          <VideoComponent {...item} />
        );

      case 'article':
        const ArticleComponent = item.views >= 1000 ? PopularArticle : NewArticle;
        return (
          <ArticleComponent {...item} />
        );
    }
  });
};