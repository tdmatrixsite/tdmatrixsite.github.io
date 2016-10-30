var demoController=function($scope,$window)
{

  var textParser= new TDMATRIX();

  $scope.InsertedQuote="My name is alaa. I am a graduate from ainshams university faculty of computer science. Faculty of computer science is located in Abbasya Street.I love information retrieval science. Information retreival is my loved  science.TermDocument Matrix is a good but not strong way of processing text.";

  $scope.ExtractedSentneces=[];

  $scope.IsTfIdfEnabled=true;

  $scope.MinWeight=0;

  $scope.MinMatchingDistance=.45;

  $scope.GroupSentences=[];

  $scope.IsSenetenceTermsShow=false;

  $scope.selectedSentence=null;

  $scope.sentenceSet=[];

  $scope.ShowSentenceTerms=function(index)
  {
    $scope.IsSenetenceTermsShow=true;
    $scope.selectedSentence=$scope.ExtractedSentneces[index];
  }

  $scope.HideSentenceTerms=function()
  {
    $scope.IsSenetenceTermsShow=false;
  }
  $scope.MethodChanged=function()
  {
    if($scope.IsTfIdfEnabled && $scope.ExtractedSentneces)
    {
      textParser.ApplyTfIDf($scope.ExtractedSentneces);
    }
  }


  $scope.init=function()
  {
    $scope.TextChanged();
  }

  $scope.TextChanged=function()
  {
      //$window.scrollTo(0, $window.innerHeight);
      $scope.ExtractedSentneces=[];



      //Extract Sentences
      $scope.ExtractedSentneces=textParser.ExtractSentences($scope.InsertedQuote);

      textParser.NormlizeTermsFrequency($scope.ExtractedSentneces,$scope.MinWeight);


      var length=$scope.ExtractedSentneces!=null?$scope.ExtractedSentneces.length:0;

      $scope.sentenceSet=[];

      $scope.GroupSentences=[];


     if($scope.MinMatchingDistance<0)
      {
            alert("Minium distance thrshold shouldnot be less than zero");
            $scope.MinMatchingDistance=.01;
      }
      if(length<3000)
      {
        $scope.sentenceSet=textParser.ExtractDisjointSet($scope.ExtractedSentneces,$scope.MinMatchingDistance);
      }
      else {
        alert("The number of sentences is "+length+" which too large to be grouped ... we are working on grouping large number of sentences");
      }


      var proceesedSetIndex=[];

      for(var key in $scope.sentenceSet.parent)
      {
        if(proceesedSetIndex[$scope.sentenceSet.parent[key]]==undefined)
        {
          $scope.GroupSentences.push($scope.sentenceSet.parent[key]);
          proceesedSetIndex[$scope.sentenceSet.parent[key]]=true;
        }
      }
  }
};
