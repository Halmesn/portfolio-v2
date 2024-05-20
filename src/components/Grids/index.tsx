import * as styled from './style';
import * as gridVariants from 'helpers';

import { useEffect, useContext } from 'react';
import GlobalContext from 'context';

import { Link } from 'react-router-dom';
import { useAnimation } from 'framer-motion';

import Hotflix from '/images/grid/hotflix.jpg';
import Ocean from '/images/grid/ocean.jpg';
import Jungle from '/images/grid/jungle.jpg';
import Desert from '/images/grid/desert.jpg';
import Beach from '/images/grid/beach.jpg';

const Grid = () => {
  const controls = useAnimation();

  const { gridState, setGridState } = useContext(GlobalContext);

  useEffect(() => {
    gridState === 'open' && controls.start('visible');
    gridState === 'close' && controls.start('close');
  }, [gridState]);

  return (
    <styled.Grid $gridState={gridState}>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={0}
          color={'#F1D3B9'}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem0}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={1}
          color={'#DF9E98'}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem1}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={2}
          color={'#fefaf6'}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem2}
        ></styled.GridItemBg>
        <div className="grid__item-content btn">
          <styled.GridItemInner
            animate={controls}
            initial="hidden"
            variants={gridVariants.gridText}
          >
            <button
              onClick={() => setGridState('close')}
              className="menu-trigger"
            >
              - close
            </button>
          </styled.GridItemInner>
        </div>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={3}
          color={'#9ED4D4'}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem3}
        ></styled.GridItemBg>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={4}
          color={'#232320'}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem4}
        ></styled.GridItemBg>
        <Link to="/">
          <div className="grid__link grid__item-content home">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3
                onClick={() => setGridState('close')}
                className="grid__item-title "
              >
                Home
              </h3>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={5}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem5}
        >
          <img
            src={Beach}
            alt="beach"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </styled.GridItemBg>
        <Link to="#">
          <div className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title-black">project</h3>
              <span className="grid__item-desc-black">Under Construction</span>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={6}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem6}
        >
          <img
            src={Desert}
            alt="desert"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </styled.GridItemBg>
        <Link to="#">
          <div className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title-black">project</h3>
              <span className="grid__item-desc-black">Under Construction</span>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={7}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem7}
        >
          <img
            src={Ocean}
            alt="ocean"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </styled.GridItemBg>
        <Link to="#">
          <div className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title-black">project</h3>
              <span className="grid__item-desc-black">Under Construction</span>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={8}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem8}
        >
          <img
            src={Jungle}
            alt="jungle"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </styled.GridItemBg>
        <Link to="#">
          <div className="grid__link grid__item-content">
            <styled.GridItemInner
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">project</h3>
              <span className="grid__item-desc">Under Construction</span>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
      <styled.GridItem>
        <styled.GridItemBg
          $pos={9}
          $gridState={gridState}
          animate={controls}
          initial="hidden"
          variants={gridVariants.gridItem9}
        >
          <img
            src={Hotflix}
            alt="hotflix"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          <styled.GridOverLay />
        </styled.GridItemBg>
        <Link to="/project/hotflix">
          <div className="grid__link grid__item-content">
            <styled.GridItemInner
              onClick={() => setGridState('close')}
              animate={controls}
              initial="hidden"
              variants={gridVariants.gridText}
            >
              <h3 className="grid__item-title">Hotflix</h3>
              <span className="grid__item-desc no-after">
                A project that got 3.6k upvotes on Reddit
              </span>
            </styled.GridItemInner>
          </div>
        </Link>
      </styled.GridItem>
    </styled.Grid>
  );
};

export default Grid;
