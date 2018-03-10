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

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        const VideoItem = item.views >= 1000 ? Popular(Video) : New(Video);
        return (
          <VideoItem {...item} />
        );


      case 'article':
        const ArticleItem = item.views >= 1000 ? Popular(Article) : New(Article);
        return (
          <ArticleItem {...item} />
        );

    }
  });
};