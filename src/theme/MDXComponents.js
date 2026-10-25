import MDXComponents from '@theme-original/MDXComponents';
import FrameworkSteps from '@site/src/components/FrameworkSteps';
import Quiz from '@site/src/components/Quiz';
import EstimationCalc from '@site/src/components/EstimationCalc';
import MetricTree from '@site/src/components/MetricTree';
import IconCards from '@site/src/components/IconCards';
import UsedBy from '@site/src/components/UsedBy';
import {Stars, Difficulty} from '@site/src/components/Badges';

// Components available in every MDX page without an import.
export default {...MDXComponents, FrameworkSteps, Quiz, EstimationCalc, MetricTree, IconCards, UsedBy, Stars, Difficulty};
