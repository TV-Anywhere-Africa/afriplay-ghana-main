import { useSelector } from 'react-redux';
import ReelGenreWrapper from './ReelGenreWrapper';
import HomeBannerSlider from "../HomeBannerSlider";
import '../../components/styles/landing/slides.scss'

const Reel = ({ title }) => {
    const { recentlyadded, mostwatched, afriPlaylive, afriPremiere, bestofepics, topsearches, twisteddrama, romcoms, hiddengems, actionandadventures, familyandkids, feelgoodmovies, comingSoon, trending, afriplaytop10, movingstories } = useSelector((state) => state.fetchMovies);
    const { activeGenreTab } = useSelector(state => state.genreTab)

    const _allMovies = {
        mostwatched,
        recentlyadded,
        comingSoon,
        trending,
        afriplaytop10,
        afriPlaylive,
        afriPremiere,
    }

    if (activeGenreTab === 'ALL') {
        if (title === 'AFRIPREMIERE') return <HomeBannerSlider title='AFRIPREMIERE' />
        if (title === 'AFRIPLAY LIVE') return <HomeBannerSlider title='AFRIPLAY LIVE' />
        if (title === 'RECENTLY ADDED' && recentlyadded.length > 0) return <ReelGenreWrapper title='RECENTLY ADDED' allMovies={_allMovies} movies={recentlyadded} />
        if (title === 'COMING SOON' && comingSoon.length > 0) return <ReelGenreWrapper title='COMING SOON' allMovies={_allMovies} movies={comingSoon} />
        if (title === 'TRENDING' && trending.length > 0) return <ReelGenreWrapper title='TRENDING' allMovies={_allMovies} movies={trending} />
        if (title === 'MOVING STORIES' && movingstories.length > 0) return <ReelGenreWrapper title='MOVING STORIES' allMovies={_allMovies} movies={movingstories} />
        if (title === 'BEST OF EPICS' && bestofepics.length > 0) return <ReelGenreWrapper title='BEST OF EPICS' allMovies={_allMovies} movies={bestofepics} />
        if (title === 'TOP SEARCHES' && topsearches.length > 0) return <ReelGenreWrapper title='TOP SEARCHES' allMovies={_allMovies} movies={topsearches} />
        if (title === 'TWISTED DRAMA' && topsearches.length > 0) return <ReelGenreWrapper title='TWISTED DRAMA' allMovies={_allMovies} movies={twisteddrama} />
        if (title === 'ROMCOMS' && topsearches.length > 0) return <ReelGenreWrapper title='ROMCOMS' allMovies={_allMovies} movies={romcoms} />
        if (title === 'HIDDEN GEMS' && topsearches.length > 0) return <ReelGenreWrapper title='HIDDEN GEMS' allMovies={_allMovies} movies={hiddengems} />
        if (title === 'ACTION & ADVENTURES' && topsearches.length > 0) return <ReelGenreWrapper title='ACTION & ADVENTURES' allMovies={_allMovies} movies={actionandadventures} />
        if (title === 'FAMILY & KIDS' && topsearches.length > 0) return <ReelGenreWrapper title='FAMILY & KIDS' allMovies={_allMovies} movies={familyandkids} />
        if (title === 'FEEL GOOD MOVIES' && topsearches.length > 0) return <ReelGenreWrapper title='FEEL GOOD MOVIES' allMovies={_allMovies} movies={feelgoodmovies} />
        // if (title === 'MOST WATCHED' && mostwatched.length > 0) return <ReelGenreWrapper title='MOST WATCHED' allMovies={_allMovies} movies={mostwatched} />
    }

    return <></>
}

export default Reel