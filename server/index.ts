import { Athena } from '@AthenaServer/api/athena';
import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { DeathCommands } from './src/commands';
import { DeathSystem } from './src/death';

const PLUGIN_NAME = 'Athena Death System';

PluginSystem.registerPlugin(PLUGIN_NAME, () => {
    Athena.systems.default.death.disable();
    DeathSystem.init();
    DeathCommands.init();
    alt.log(`~lg~Death Plugin was Loaded`);
});
